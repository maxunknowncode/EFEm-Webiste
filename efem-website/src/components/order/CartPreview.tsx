"use client";

import { useMemo } from "react";

import type { CartItem } from "./data";

type CartPreviewProps = {
  items: CartItem[];
  onIncrement: (itemId: string) => void;
  onDecrement: (itemId: string) => void;
  onClear: () => void;
};

export function CartPreview({ items, onIncrement, onDecrement, onClear }: CartPreviewProps) {
  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
    );
    const serviceFee = subtotal > 0 ? Math.min(2, subtotal * 0.05) : 0;
    const total = subtotal + serviceFee;

    return {
      subtotal,
      serviceFee,
      total,
    };
  }, [items]);

  return (
    <aside className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:sticky lg:top-8">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Warenkorb</h2>
        {items.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs font-semibold text-rose-500 transition hover:text-rose-600"
          >
            Leeren
          </button>
        )}
      </header>

      <div className="space-y-4 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-sm text-slate-500">Füge Gerichte hinzu, um deine Bestellung zu sehen.</p>
        ) : (
          items.map((cartItem) => (
            <div key={cartItem.item.id} className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{cartItem.item.name}</p>
                  <p className="text-xs text-slate-500">
                    {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
                      cartItem.item.price
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onDecrement(cartItem.item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold text-slate-900">{cartItem.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onIncrement(cartItem.item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Zwischensumme</span>
          <span>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totals.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Service</span>
          <span>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totals.serviceFee)}</span>
        </div>
        <div className="flex items-center justify-between text-base font-semibold text-slate-900">
          <span>Gesamt</span>
          <span>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totals.total)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 hover:shadow-md"
          >
            Zur Kasse (Vorschau)
          </button>
        </div>
        <p className="text-center text-xs text-slate-500">Nur UI-Vorschau, keine echte Bestellung.</p>
      </div>
    </aside>
  );
}
