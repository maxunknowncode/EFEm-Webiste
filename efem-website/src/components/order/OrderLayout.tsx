"use client";

import { useCallback, useMemo, useState } from "react";

import { CartPreview } from "./CartPreview";
import { CategorySidebar } from "./CategorySidebar";
import { MenuContent } from "./MenuContent";
import { OrderHeader } from "./OrderHeader";
import type { CartItem, OrderItem } from "./data";
import { orderCategories } from "./data";

export function OrderLayout() {
  const categories = useMemo(() => orderCategories, []);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [timeOption, setTimeOption] = useState<"asap" | "later">("asap");
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = useCallback((item: OrderItem) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const handleIncrement = useCallback((itemId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback((itemId: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleClear = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleCategorySelect = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="space-y-10">
      <OrderHeader
        orderType={orderType}
        onOrderTypeChange={setOrderType}
        timeOption={timeOption}
        onTimeOptionChange={setTimeOption}
      />

      <div className="lg:hidden">
        <CategorySidebar
          categories={categories}
          activeCategoryId={activeCategoryId}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[260px_1fr_320px] lg:gap-6">
        <div className="hidden lg:block">
          <CategorySidebar
            categories={categories}
            activeCategoryId={activeCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        <MenuContent
          categories={categories}
          onAddItem={handleAddItem}
          onSectionInView={setActiveCategoryId}
        />

        <CartPreview
          items={cartItems}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}
