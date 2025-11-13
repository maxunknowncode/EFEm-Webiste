import Link from "next/link";

const OrderPage = () => {
  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Online bestellen</h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Starte deine Bestellung mit wenigen Klicks. Wähle die Online-Bestellplattform oder ruf uns direkt an – wir kümmern uns um den Rest.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Direkt über unsere Online-Bestellplattform bestellen
              </h2>
              <p className="text-sm text-slate-600">
                Entdecke unsere komplette Speisekarte online und bestelle bequem mit deinem Smartphone oder Computer.
              </p>
            </div>
            <Link
              href="https://efemgrillpizzeria.order.app.hd.digital/menus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg"
            >
              Jetzt online bestellen
            </Link>
          </section>
          <section className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">Telefonische Bestellung</h2>
              <p className="text-sm text-slate-600">
                Du bestellst lieber persönlich? Kein Problem – unser Team hilft dir gerne weiter und berät dich bei der Auswahl.
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Telefon:</span> <a className="text-rose-500" href="tel:+495921123456">+49 5921 123456</a>
              </p>
              <p>Erreichbar täglich von 11:30 – 22:30 Uhr.</p>
            </div>
          </section>
        </div>
        <section className="mt-12 rounded-3xl border border-dashed border-rose-200 bg-rose-50/60 p-8 text-slate-700">
          <h3 className="text-xl font-semibold text-rose-500">Liefergebiete &amp; Hinweise</h3>
          <p className="mt-3 text-sm">
            Wir liefern innerhalb Nordhorns und in ausgewählten Ortsteilen der Umgebung. Mindestbestellwert 15 €. Bitte halte deine Lieferadresse bereit – unser Team bestätigt alles kurz nach deiner Bestellung.
          </p>
        </section>
      </div>
    </main>
  );
};

export default OrderPage;
