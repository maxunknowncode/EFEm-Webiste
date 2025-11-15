"use client";

import { useMemo } from "react";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
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
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            showAction
            onAction={() => addItem(item)}
          />
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
