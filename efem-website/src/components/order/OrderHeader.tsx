"use client";

import { useMemo, useState } from "react";

import { locations, type LocationId } from "./locations";

const fulfillmentOptions = [
  { id: "delivery", label: "Lieferung" },
  { id: "pickup", label: "Abholung" },
] as const;

type FulfillmentMode = (typeof fulfillmentOptions)[number]["id"];

const timeOptions = [
  { id: "asap", label: "Schnellstmöglich" },
  { id: "later", label: "Später wählen" },
] as const;

type TimeMode = (typeof timeOptions)[number]["id"];

export function OrderHeader() {
  const [selectedLocation, setSelectedLocation] = useState<LocationId>("nordhorn");
  const [fulfillmentMode, setFulfillmentMode] = useState<FulfillmentMode>(
    "delivery"
  );
  const [timeMode, setTimeMode] = useState<TimeMode>("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  const activeLocation = useMemo(
    () => locations.find((location) => location.id === selectedLocation),
    [selectedLocation]
  );

  const pillClasses = (isActive: boolean) =>
    `inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
      isActive
        ? "bg-slate-900 text-white shadow-sm"
        : "border border-slate-200 bg-white text-slate-700 hover:border-rose-300 hover:text-rose-500"
    }`;

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-6 md:max-w-xl">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Standort wählen
            </p>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setSelectedLocation(location.id)}
                  className={pillClasses(location.id === selectedLocation)}
                >
                  {location.name.replace(/^EFEm\s+/i, "")}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Willkommen bei
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {activeLocation?.name ?? "EFEm"}
            </h1>
            <div className="text-sm text-slate-600">
              {activeLocation ? (
                <>
                  <p>
                    {activeLocation.street} · {activeLocation.zipCity}
                  </p>
                  <p>Öffnungszeiten: {activeLocation.openingTimes}</p>
                </>
              ) : (
                <p>Adresse wird geladen...</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:min-w-[320px]">
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-500">
              Lieferart
            </p>
            <div className="flex flex-wrap gap-2">
              {fulfillmentOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFulfillmentMode(option.id)}
                  className={pillClasses(fulfillmentMode === option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              {fulfillmentMode === "delivery"
                ? "Wir liefern im Umkreis des gewählten Standorts."
                : "Bestellung zur Abholung im gewählten Standort."}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-500">Zeitwahl</p>
            <div className="flex flex-wrap gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setTimeMode(option.id)}
                  className={pillClasses(timeMode === option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {timeMode === "later" && (
              <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700">
                    Datum
                  </label>
                  <input
                    type="date"
                    value={scheduledDate}
                    onChange={(event) => setScheduledDate(event.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700">
                    Uhrzeit
                  </label>
                  <input
                    type="time"
                    value={scheduledTime}
                    onChange={(event) => setScheduledTime(event.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
