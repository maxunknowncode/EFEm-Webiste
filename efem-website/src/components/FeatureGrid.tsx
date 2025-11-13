const features = [
  {
    title: "Holzofen-Pizza",
    description: "Knuspriger Boden, frische Zutaten und Liebe zum Detail.",
    icon: "🍕",
  },
  {
    title: "Frischer Döner",
    description: "Saftig gewürztes Fleisch, hausgemachte Saucen und knackiger Salat.",
    icon: "🥙",
  },
  {
    title: "Schnelle Lieferung",
    description: "Bestell bequem online und wir bringen dein Essen direkt zu dir.",
    icon: "⚡",
  },
  {
    title: "Online bezahlen",
    description: "Sichere Zahlung mit deinen bevorzugten Zahlungsmitteln.",
    icon: "💳",
  },
];

const FeatureGrid = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
        Warum Pizzeria EFEm?
      </h2>
      <p className="max-w-2xl text-lg text-slate-600">
        Wir verbinden traditionelle Rezepte mit moderner Technik – für ein Geschmackserlebnis, das du nicht vergisst.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-2xl">
              <span>{feature.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
