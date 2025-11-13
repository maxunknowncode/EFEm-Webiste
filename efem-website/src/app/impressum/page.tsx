const ImpressumPage = () => {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <article className="space-y-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-12">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Rechtliches</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Impressum</h1>
          </header>

          <section className="space-y-3 text-slate-600">
            <p>
              Pizzeria EFEm
              <br />
              Mühlenstraße 35
              <br />
              49824 Emlichheim
            </p>

            <p>
              Vertreten durch: Tayfun Pala
              <br />
              Telefon: +49 (0) 5943 985 995
              <br />
              E-Mail: <a className="text-rose-500 transition hover:text-rose-600" href="mailto:tayfunpala@hotmail.de">tayfunpala@hotmail.de</a>
            </p>
          </section>

          <section className="space-y-3 text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Streitschlichtung</h2>
            <p>
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="space-y-3 text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="space-y-3 text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
              können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="space-y-3 text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom
              Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <footer className="text-sm text-slate-500">© 2025 Pizzeria EFEm | Alle Rechte vorbehalten</footer>
        </article>
      </div>
    </main>
  );
};

export default ImpressumPage;
