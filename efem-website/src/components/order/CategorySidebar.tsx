"use client";

import { useMemo } from "react";
import { menuData } from "./data";

type CategorySidebarProps = {
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
};

export function CategorySidebar({
  activeCategoryId,
  onSelectCategory,
}: CategorySidebarProps) {
  const categories = useMemo(
    () => [...menuData.categories].sort((a, b) => a.order - b.order),
    []
  );

  return (
    <div className="space-y-4">
      <div className="lg:hidden">
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
      <nav className="hidden lg:block">
        <ul className="space-y-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  className={`w-full text-left rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
