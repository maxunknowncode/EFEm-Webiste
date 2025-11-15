"use client";

import type { OrderItem } from "@/components/order/data";

type MenuItemCardProps = {
  item: OrderItem;
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
};

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export function MenuItemCard({
  item,
  showAction = false,
  actionLabel = "In den Warenkorb",
  onAction,
}: MenuItemCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-base font-semibold leading-snug text-slate-900">
            {item.name}
          </h3>
          <p className="text-sm text-slate-600">{item.description}</p>
          {(item.spicy || item.vegetarian) && (
            <div className="flex flex-wrap gap-2">
              {item.spicy && (
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600">
                  <span aria-hidden>🌶️</span>
                  Pikant
                </span>
              )}
              {item.vegetarian && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  <span aria-hidden>🌱</span>
                  Vegetarisch
                </span>
              )}
            </div>
          )}
        </div>
        <span className="text-base font-semibold text-rose-500 whitespace-nowrap">
          {currency.format(item.price)}
        </span>
      </div>
      {showAction && onAction ? (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onAction}
            className="inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 sm:w-auto"
          >
            {actionLabel}
          </button>
        </div>
      ) : null}
    </article>
  );
}
