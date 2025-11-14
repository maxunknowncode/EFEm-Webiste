export type LocationId = "nordhorn" | "emlichheim";

export type Location = {
  id: LocationId;
  name: string;
  subtitle?: string;
  street: string;
  zipCity: string;
  openingTimes: string;
};

export const locations: Location[] = [
  {
    id: "nordhorn",
    name: "EFEm Nordhorn",
    street: "Lingener Straße 45",
    zipCity: "48529 Nordhorn",
    openingTimes: "Mo–So 11:30 – 22:30 Uhr",
  },
  {
    id: "emlichheim",
    name: "EFEm Emlichheim",
    street: "Hauptstraße 12",
    zipCity: "49824 Emlichheim",
    openingTimes: "Mo–So 12:00 – 22:00 Uhr",
  },
];
