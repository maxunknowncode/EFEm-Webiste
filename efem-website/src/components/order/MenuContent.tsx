"use client";

import { useMemo } from "react";
import { menuData } from "./data";
import { useCart } from "./Cart";

type MenuContentProps = {
  activeCategoryId: string;
};

export function MenuContent({ activeCategoryId }: MenuContentProps) {
  const { addItem } = useCart();

  const items = useMemo(
    () =>
      menuData.items.filter((item) => item.categoryId === activeCategoryId),
    [activeCategoryId]
  );

  const activeCategory = useMemo(
    () => menuData.categories.find((cat) => cat.id === activeCategoryId),
    [activeCategoryId]
  );

  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {activeCategory?.name ?? "Auswahl"}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Entdecke unsere Auswahl und stelle dir dein Menü nach Wunsch
          zusammen.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-5">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex min-w-[260px] max-w-[320px] flex-1 flex-col rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold leading-snug text-slate-900">
                {item.name}
              </h3>
              <span className="text-sm font-semibold text-rose-500 whitespace-nowrap">
                {item.price.toFixed(2)} €
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-600 line-clamp-4">
              {item.description}
            </p>
            {(item.spicy || item.vegetarian) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {item.spicy && (
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500">
                    Pikant
                  </span>
                )}
                {item.vegetarian && (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-500">
                    Vegetarisch
                  </span>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => addItem(item)}
              className="mt-auto mx-auto inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 hover:shadow-md"
            >
              In den Warenkorb
            </button>
          </article>
        ))}
        {items.length === 0 && (
          <div className="w-full rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-slate-500">
              In dieser Kategorie werden bald alle Spezialitäten verfügbar sein.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
