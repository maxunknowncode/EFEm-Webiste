"use client";

import { useEffect, useMemo, useState } from "react";
import { Cart, CartProvider, useCart } from "./Cart";
import { CategorySidebar } from "./CategorySidebar";
import { MenuContent } from "./MenuContent";
import { OrderHeader } from "./OrderHeader";
import { menuData } from "./data";

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

function OrderLayoutContent() {
  const sortedCategories = useMemo(
    () => [...menuData.categories].sort((a, b) => a.order - b.order),
    []
  );
  const [activeCategoryId, setActiveCategoryId] = useState(
    sortedCategories[0]?.id ?? ""
  );
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  return (
    <>
      <main className="flex-1 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 pb-32 space-y-8 lg:px-6 lg:pb-16">
          <OrderHeader />
          <div className="space-y-6 md:grid md:grid-cols-[220px_minmax(0,1fr)_320px] md:gap-6 md:space-y-0">
            <aside className="md:sticky md:top-24">
              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <CategorySidebar
                  activeCategoryId={activeCategoryId}
                  onSelectCategory={setActiveCategoryId}
                />
              </div>
            </aside>
            <section className="min-w-0">
              <MenuContent activeCategoryId={activeCategoryId} />
            </section>
            <aside className="hidden md:block">
              <Cart />
            </aside>
          </div>
        </div>
      </main>
      <MobileCartDrawer
        open={isMobileCartOpen}
        onClose={() => setIsMobileCartOpen(false)}
      />
      <MobileCartBar
        hidden={isMobileCartOpen}
        onOpen={() => setIsMobileCartOpen(true)}
      />
      <CartToast />
    </>
  );
}

function CartToast() {
  const { lastAddedItemName } = useCart();

  if (!lastAddedItemName) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 md:bottom-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
        <span>{lastAddedItemName}</span>
        <span className="text-xs uppercase tracking-wide">hinzugefügt</span>
      </div>
    </div>
  );
}

function MobileCartBar({
  onOpen,
  hidden,
}: {
  onOpen: () => void;
  hidden?: boolean;
}) {
  const { itemCount, total } = useCart();

  if (hidden || itemCount === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-30 px-4 md:hidden">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full items-center justify-between gap-4 rounded-full bg-rose-500 px-5 py-4 text-left text-white shadow-xl transition hover:bg-rose-600"
        aria-label="Warenkorb öffnen"
      >
        <div className="text-sm font-medium">
          {itemCount} Artikel
        </div>
        <div className="text-base font-semibold">
          {currencyFormatter.format(total)}
        </div>
        <div className="text-sm font-semibold tracking-wide">
          Warenkorb
        </div>
      </button>
    </div>
  );
}

function MobileCartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    total,
  } = useCart();

  useEffect(() => {
    if (!open) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open && cartItems.length === 0) {
      onClose();
    }
  }, [cartItems.length, onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-cart-title">
      <div
        className="absolute inset-0 bg-slate-900/50"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-3xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="mobile-cart-title" className="text-lg font-semibold text-slate-900">
            Dein Warenkorb
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-slate-500"
          >
            Schließen
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
          {cartItems.length === 0 ? (
            <p className="text-sm text-slate-500">
              Füge deiner Bestellung Lieblingsgerichte hinzu.
            </p>
          ) : (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.item.id}
                className="rounded-2xl border border-slate-100 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {cartItem.item.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {currencyFormatter.format(cartItem.item.price)} / Stück
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(cartItem.item.id)}
                    className="text-xs font-semibold text-rose-500"
                  >
                    Entfernen
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-slate-200">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(cartItem.item.id)}
                      className="h-9 w-10 text-lg text-slate-600"
                      aria-label={`${cartItem.item.name} verringern`}
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-sm font-semibold text-slate-900">
                      {cartItem.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(cartItem.item.id)}
                      className="h-9 w-10 text-lg text-slate-600"
                      aria-label={`${cartItem.item.name} erhöhen`}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {currencyFormatter.format(
                      cartItem.item.price * cartItem.quantity
                    )}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <span>Gesamt</span>
            <span>{currencyFormatter.format(total)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600"
          >
            Zur Kasse (Vorschau)
          </button>
        </div>
      </div>
    </div>
  );
}

export function OrderLayout() {
  return (
    <CartProvider>
      <OrderLayoutContent />
    </CartProvider>
  );
}
