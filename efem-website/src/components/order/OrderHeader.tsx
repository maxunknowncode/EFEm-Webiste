"use client";

import { useState } from "react";

type OrderHeaderProps = {
  orderType: "delivery" | "pickup";
  onOrderTypeChange: (type: "delivery" | "pickup") => void;
  timeOption: "asap" | "later";
  onTimeOptionChange: (option: "asap" | "later") => void;
};

const orderTypeLabels: Record<OrderHeaderProps["orderType"], string> = {
  delivery: "Lieferung",
  pickup: "Abholung",
};

const timeOptionLabels: Record<OrderHeaderProps["timeOption"], string> = {
  asap: "Schnellstmöglich",
  later: "Später wählen",
};

export function OrderHeader({
  orderType,
  onOrderTypeChange,
  timeOption,
  onTimeOptionChange,
}: OrderHeaderProps) {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  return (
    <header className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-rose-500">Efem Experience</span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Efem Grill &amp; Pizzeria am Theater
              </h1>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Theaterplatz 12, 48529 Nordhorn · Täglich 11:30 – 22:30 Uhr
              </p>
            </div>
          </div>
          {!announcementDismissed && (
            <div className="flex flex-col items-start justify-between gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 shadow-inner md:max-w-xs">
              <p>Dies ist eine Bestellvorschau, keine echte Online-Bestellung.</p>
              <button
                type="button"
                onClick={() => setAnnouncementDismissed(true)}
                className="text-xs font-semibold text-rose-500 transition hover:text-rose-600"
              >
                Verstanden
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {(["delivery", "pickup"] as const).map((type) => {
            const isActive = orderType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => onOrderTypeChange(type)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-rose-500 text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {orderTypeLabels[type]}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {(["asap", "later"] as const).map((option) => {
            const isActive = timeOption === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onTimeOptionChange(option)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {timeOptionLabels[option]}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
