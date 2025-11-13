const DatenschutzPage = () => {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <article className="space-y-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-12">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Rechtliches</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Datenschutzerklärung</h1>
            <p className="text-base text-slate-600">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir transparent darüber, wie
              wir personenbezogene Daten erheben, verarbeiten und schützen, wenn Sie unsere Website besuchen oder unsere
              Leistungen in Anspruch nehmen.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Verantwortliche Stelle</h2>
            <p className="text-slate-600">
              Pizzeria EFEm
              <br />
              Efem Gastroservice e.K.
              <br />
              Beispielstraße 12, 48529 Musterstadt
              <br />
              Telefon: +49 (0) 5921 000000
              <br />
              E-Mail: kontakt@pizzeria-efem.de
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-slate-600">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
              unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der gesetzlichen
              Vorschriften, insbesondere Art. 6 DSGVO, sowie ergänzender nationaler Regelungen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Hosting und Content Delivery</h2>
            <p className="text-slate-600">
              Unsere Website wird bei einem professionellen Hosting-Anbieter mit Standort innerhalb der Europäischen Union
              betrieben. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung, der ein angemessenes Datenschutzniveau
              garantiert. Alle Daten werden auf Servern verarbeitet, die durch aktuelle technische und organisatorische
              Maßnahmen geschützt sind.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Server-Logfiles</h2>
            <p className="text-slate-600">
              Bei jedem Seitenaufruf werden automatisch bestimmte Informationen erfasst und in sogenannten Server-Logfiles
              gespeichert. Dazu gehören IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge
              und ggf. anfragender Provider. Die Speicherung erfolgt aus Sicherheitsgründen, um z.&nbsp;B. Angriffe erkennen zu
              können, und wird nach spätestens 14 Tagen gelöscht, sofern keine weitere Aufbewahrung zu Beweiszwecken
              erforderlich ist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Bestellungen und Kundenkonto</h2>
            <p className="text-slate-600">
              Wenn Sie Speisen bestellen oder ein Kundenkonto anlegen, verarbeiten wir die von Ihnen bereitgestellten Daten
              (z.&nbsp;B. Name, Lieferadresse, Kontaktdaten, Bestellinformationen), um die Bestellung abzuwickeln und Sie über
              den Status zu informieren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Ohne Bereitstellung dieser Daten ist
              eine Bestellung nicht möglich.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Kontaktaufnahme</h2>
            <p className="text-slate-600">
              Wenn Sie uns telefonisch, per E-Mail oder über ein Kontaktformular ansprechen, verarbeiten wir die von Ihnen
              übermittelten Angaben zur Bearbeitung Ihres Anliegens. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b oder f DSGVO. Wir löschen Ihre Angaben, sobald die Anfrage abschließend bearbeitet wurde und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Zahlungsabwicklung</h2>
            <p className="text-slate-600">
              Zur Zahlungsabwicklung geben wir erforderliche Zahlungsinformationen an spezialisierte Zahlungsdienstleister
              weiter. Diese Dienstleister sind selbst Verantwortliche im Sinne der DSGVO. Die Datenübermittlung erfolgt zum
              Zweck der Vertragsdurchführung nach Art. 6 Abs. 1 lit. b DSGVO und basiert auf sicheren Schnittstellen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Speicherdauer</h2>
            <p className="text-slate-600">
              Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder eine
              gesetzliche Aufbewahrungspflicht besteht. Nach Wegfall des Zwecks oder Ablauf der Fristen werden die Daten
              routinemäßig gelöscht oder gesperrt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Ihre Rechte</h2>
            <p className="text-slate-600">
              Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung sowie das Recht auf Datenübertragbarkeit. Darüber hinaus können Sie der Verarbeitung
              personenbezogener Daten widersprechen, sofern diese auf Art. 6 Abs. 1 lit. f DSGVO beruht.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                <span>
                  <strong>Widerruf Ihrer Einwilligung:</strong> Erteilte Einwilligungen können Sie jederzeit für die Zukunft
                  widerrufen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                <span>
                  <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn
                  Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstößt.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Sicherheitsmaßnahmen</h2>
            <p className="text-slate-600">
              Wir setzen organisatorische und technische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung
              oder unbefugten Zugriff zu schützen. Dazu gehören verschlüsselte Verbindungen, Zugriffsbeschränkungen und
              regelmäßige Sicherheitsüberprüfungen unserer Systeme.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Aktualität und Änderungen</h2>
            <p className="text-slate-600">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder
              neue Leistungen anzupassen. Die jeweils aktuelle Version finden Sie jederzeit auf dieser Seite.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default DatenschutzPage;
