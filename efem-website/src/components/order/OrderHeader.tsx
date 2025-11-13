"use client";

import { useState } from "react";

const deliveryOptions = [
  { id: "delivery", label: "Lieferung" },
  { id: "pickup", label: "Abholung" },
];

const timeOptions = [
  { id: "asap", label: "Schnellstmöglich" },
  { id: "later", label: "Später wählen" },
];

export function OrderHeader() {
  const [selectedDelivery, setSelectedDelivery] = useState("delivery");
  const [selectedTime, setSelectedTime] = useState("asap");

  return (
    <section className="bg-white shadow-sm rounded-3xl p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Willkommen bei
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Efem Grill &amp; Pizzeria am Theater
            </h1>
          </div>
          <div className="text-sm text-slate-600 space-y-1">
            <p>Theaterstraße 12 · 52062 Aachen</p>
            <p>Öffnungszeiten heute: 11:30 – 22:30 Uhr</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:min-w-[280px]">
          <div className="bg-slate-100 rounded-2xl p-2 flex gap-2">
            {deliveryOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedDelivery(option.id)}
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedDelivery === option.id
                    ? "bg-white shadow-sm text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="bg-slate-100 rounded-2xl p-2 flex gap-2">
            {timeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedTime(option.id)}
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedTime === option.id
                    ? "bg-white shadow-sm text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
