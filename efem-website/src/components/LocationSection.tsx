import Link from "next/link";

type Location = {
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
};

const locations: Location[] = [
  {
    name: "EFEm Nordhorn",
    address: "Lingener Straße 45, 48529 Nordhorn",
    hours: "Mo–So 11:30 – 22:30 Uhr",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "EFEm Emlichheim",
    address: "Hauptstraße 12, 49824 Emlichheim",
    hours: "Mo–So 12:00 – 22:00 Uhr",
    mapUrl: "https://maps.google.com",
  },
];

const LocationSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Unsere Standorte
          </h2>
          <p className="max-w-xl text-lg text-slate-600">
            Besuche uns vor Ort oder bestelle bequem nach Hause. Wir freuen uns auf dich!
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <div
            key={location.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{location.name}</h3>
              <p className="text-sm text-slate-600">{location.address}</p>
            </div>
            <p className="text-sm text-slate-500">Öffnungszeiten: {location.hours}</p>
            <Link
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-400 hover:text-rose-500"
            >
              Route anzeigen
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
