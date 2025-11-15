import Link from "next/link";

const CTASection = () => {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-10 text-center text-white shadow-lg sm:px-8 sm:py-12">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Hungrig? Bestell deine Lieblingspizza jetzt online.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200">
        Nur wenige Klicks trennen dich von deinem Lieblingsgericht – frisch, schnell und zuverlässig geliefert.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/bestellen"
          className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-400 hover:shadow-xl sm:w-auto"
        >
          Jetzt bestellen
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
