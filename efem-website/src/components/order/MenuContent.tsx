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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {activeCategory?.name ?? "Auswahl"}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Entdecke unsere Auswahl und stelle dir dein Menü nach Wunsch
          zusammen.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>
                <span className="text-sm font-semibold text-slate-900">
                  {item.price.toFixed(2)} €
                </span>
              </div>
              <p className="text-sm text-slate-500">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.spicy && (
                  <span className="text-xs font-medium text-rose-500 bg-rose-50 rounded-full px-3 py-1">
                    Pikant
                  </span>
                )}
                {item.vegetarian && (
                  <span className="text-xs font-medium text-emerald-500 bg-emerald-50 rounded-full px-3 py-1">
                    Vegetarisch
                  </span>
                )}
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <button
                type="button"
                onClick={() => addItem(item)}
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 hover:shadow-md"
              >
                In den Warenkorb
              </button>
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <div className="col-span-full bg-white shadow-sm rounded-2xl p-10 text-center">
            <p className="text-sm text-slate-500">
              In dieser Kategorie werden bald alle Spezialitäten verfügbar sein.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
