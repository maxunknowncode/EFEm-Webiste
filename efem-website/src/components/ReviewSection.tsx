const reviews = [
  {
    name: "Sophie M.",
    quote:
      "Die beste Pizza in Nordhorn! Der Teig ist perfekt und die Zutaten schmecken unglaublich frisch.",
    rating: 5,
  },
  {
    name: "Can Y.",
    quote:
      "Ob Döner oder Pizza – bei EFEm ist immer alles heiß, knusprig und super schnell da.",
    rating: 5,
  },
  {
    name: "Laura M.",
    quote:
      "Toller Service, moderne Bestellung und geschmacklich ein echtes Highlight.",
    rating: 4,
  },
];

const renderStars = (count: number) => {
  return "★★★★★".slice(0, count).padEnd(5, "☆");
};

const ReviewSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
        Stimmen unserer Gäste
      </h2>
      <p className="max-w-2xl text-lg text-slate-600">
        Wir setzen auf Qualität und Gastfreundschaft – und das hört man. Hier ein kleiner Einblick.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
          >
            <span className="text-lg text-rose-500">{renderStars(review.rating)}</span>
            <blockquote className="text-sm text-slate-600">“{review.quote}”</blockquote>
            <figcaption className="mt-auto text-sm font-semibold text-slate-900">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
