"use client";

import type { OrderCategory } from "./data";

type CategorySidebarProps = {
  categories: OrderCategory[];
  activeCategoryId: string;
  onCategorySelect: (categoryId: string) => void;
};

export function CategorySidebar({ categories, activeCategoryId, onCategorySelect }: CategorySidebarProps) {
  return (
    <nav className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100 lg:sticky lg:top-8 lg:h-fit">
      <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:gap-2 lg:overflow-visible">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategorySelect(category.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
