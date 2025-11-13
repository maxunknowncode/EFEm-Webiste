const DatenschutzPage = () => {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <article className="space-y-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-12">
          <header className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Datenschutz</h1>
          </header>

          <section className="space-y-3 text-center text-slate-600">
            <p>Pizzeria EFEm</p>
            <p>Mühlenstraße 35</p>
            <p>49824 Emlichheim</p>
            <p>Telefon: +49 (0) 5943 985 995</p>
            <p>E-Mail: tayfunpala@hotmail.de</p>
          </section>

          <section className="space-y-6 text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Datenschutzerklärung:</h2>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">1. Allgemeine Hinweise und Pflichtinformationen</h3>
              <p>
                Der Betreiber dieser Seiten nimmt den Schutz Ihrer Daten sehr ernst. Personenbezogene Daten werden auf dieser
                Seite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus
                anderen Gründen an Dritte weitergegeben.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">2. Datenerhebung auf unserer Website</h3>
              <p>
                Ihre Daten werden zum Teil erhoben, wenn Sie uns diese mitteilen. Dies kann z. B. der Fall sein, wenn Sie eine
                E-Mail senden. Andere Daten werden automatisch beim Besuch der Website durch unser IT-System erfasst. Das sind
                vor allem technische Daten (z. B. Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">3. Verwendung personenbezogener Daten</h3>
              <p>
                Ein Teil der Daten wird erhoben, um eine reibungslose Nutzung der Seite zu ermöglichen. Andere Datenteile können
                genutzt werden, um unsere Leistung zu verbessern.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">4. Datenweitergabe</h3>
              <p>
                Ihre personenbezogenen Daten werden nur weitergegeben oder sonst übermittelt, wenn dies gesetzlich erlaubt ist oder
                Sie eingewilligt haben.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">5. Cookies</h3>
              <p>
                Diese Website verwendet einige Cookies. Cookies werden z. B. nicht dazu verwendet, Ihnen persönlich erkennbare Daten
                zu speichern. Sie dienen vielmehr dazu, die Funktion der Website insgesamt sicherzustellen und die Nutzung bestimmter
                Funktionen zu erleichtern.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">6. Analyse-Tools</h3>
              <p>Wenn &amp; soweit Analyse-Tools eingesetzt werden, werden diese gesondert in dieser Erklärung benannt.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">7. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und den Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                Daten.
              </p>
            </div>
          </section>

          <footer className="text-center text-sm text-slate-500">© 2025 Pizzeria EFEm | Alle Rechte vorbehalten</footer>
        </article>
      </div>
    </main>
  );
};

export default DatenschutzPage;
