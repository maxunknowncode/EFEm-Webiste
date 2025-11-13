"use client";

import { useMemo, useState } from "react";
import { Cart, CartProvider } from "./Cart";
import { CategorySidebar } from "./CategorySidebar";
import { MenuContent } from "./MenuContent";
import { OrderHeader } from "./OrderHeader";
import { menuData } from "./data";

function OrderLayoutContent() {
  const sortedCategories = useMemo(
    () => [...menuData.categories].sort((a, b) => a.order - b.order),
    []
  );
  const [activeCategoryId, setActiveCategoryId] = useState(
    sortedCategories[0]?.id ?? ""
  );

  return (
    <main className="flex-1 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <OrderHeader />
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
          <aside>
            <CategorySidebar
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </aside>
          <section>
            <MenuContent activeCategoryId={activeCategoryId} />
          </section>
          <aside className="hidden lg:block">
            <Cart />
          </aside>
        </div>
        <div className="lg:hidden">
          <Cart />
        </div>
      </div>
    </main>
  );
}

export function OrderLayout() {
  return (
    <CartProvider>
      <OrderLayoutContent />
    </CartProvider>
  );
}
