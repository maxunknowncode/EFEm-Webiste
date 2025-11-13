"use client";

import { useEffect, useRef } from "react";

import type { OrderCategory, OrderItem } from "./data";

type MenuContentProps = {
  categories: OrderCategory[];
  onAddItem: (item: OrderItem) => void;
  onSectionInView: (categoryId: string) => void;
};

export function MenuContent({ categories, onAddItem, onSectionInView }: MenuContentProps) {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleEntry?.target) {
          const entryId = visibleEntry.target.getAttribute("data-category-id");
          if (entryId) {
            onSectionInView(entryId);
          }
        }
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    const elements = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[];
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [categories, onSectionInView]);

  return (
    <section className="space-y-12">
      {categories.map((category) => (
        <div
          key={category.id}
          ref={(element) => {
            sectionRefs.current[category.id] = element;
          }}
          data-category-id={category.id}
          id={`category-${category.id}`}
          className="scroll-mt-28"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{category.name}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {category.items.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
                      {item.spicy && <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-500">Scharf</span>}
                      {item.vegetarian && <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-600">Veggie</span>}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-base font-semibold text-slate-900">
                    {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(item.price)}
                  </p>
                  <button
                    type="button"
                    onClick={() => onAddItem(item)}
                    className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 hover:shadow-md"
                  >
                    In Warenkorb (Vorschau)
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
