"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { menuData } from "@/components/order/data";

const sortedCategories = [...menuData.categories].sort(
  (a, b) => a.order - b.order
);

const MenuPage = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(
    sortedCategories[0]?.id ?? ""
  );

  const categoriesWithItems = useMemo(
    () =>
      sortedCategories.map((category) => ({
        ...category,
        items: menuData.items.filter((item) => item.categoryId === category.id),
      })),
    []
  );

  const handleSkip = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId);
    const target = document.getElementById(categoryId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const sections = sortedCategories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategoryId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-16">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            Unsere Speisekarte
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Alle Kategorien auf einen Blick
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:mx-0">
            Blättere durch alle Spezialitäten von Kebap über Pasta bis zu Desserts. Die gleichen Daten wie beim Bestellen – nur zum Stöbern.
          </p>
        </div>

        <nav aria-label="Kategorienübersicht" className="mt-10">
          <div className="flex gap-3 overflow-x-auto pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-start md:overflow-visible">
            {sortedCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleSkip(category.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="mt-12 space-y-12">
          {categoriesWithItems.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-24 space-y-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {category.name}
                  </h2>
                  <p className="text-sm text-slate-500">
                    Unsere Auswahl in der Kategorie {category.name}.
                  </p>
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {category.items.length} Gerichte
                </span>
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
                {category.items.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
                    Hier erscheinen bald Gerichte dieser Kategorie.
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
