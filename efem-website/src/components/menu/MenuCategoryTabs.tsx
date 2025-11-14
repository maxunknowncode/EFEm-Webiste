"use client";

import { useState } from "react";

export type MenuCategoryTab = {
  id: string;
  label: string;
};

type MenuCategoryTabsProps = {
  tabs: MenuCategoryTab[];
  initialActiveId?: string;
};

export function MenuCategoryTabs({
  tabs,
  initialActiveId,
}: MenuCategoryTabsProps) {
  const [activeId, setActiveId] = useState<string>(
    initialActiveId ?? tabs[0]?.id ?? ""
  );

  const handleTabClick = (tabId: string) => {
    setActiveId(tabId);
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="-mx-4 flex items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:justify-center">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabClick(tab.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
              isActive
                ? "bg-slate-900 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-700 hover:border-rose-300 hover:text-rose-500"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
