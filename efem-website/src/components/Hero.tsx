import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-16 shadow-sm transition hover:shadow-lg sm:px-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            Pizzeria &amp; Grill
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Pizzeria EFEm – Pizzeria &amp; Grill
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Frische Pizza, saftiger Döner und mehr – einfach online bestellen.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/bestellen"
              className="flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg sm:w-auto"
            >
              Jetzt bestellen
            </Link>
            <Link
              href="/speisekarte"
              className="flex w-full items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-400 hover:text-rose-500 sm:w-auto"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-6 rounded-3xl bg-gradient-to-br from-rose-100 via-white to-orange-50 opacity-70" />
          <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-rose-200 via-rose-100 to-orange-100 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-white/80 px-6 py-3 text-sm font-medium text-slate-500 shadow">
                Platz für ein köstliches Food-Foto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
