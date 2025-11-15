"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, OrderItem } from "./data";

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

type CartContextValue = {
  cartItems: CartItem[];
  addItem: (item: OrderItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  lastAddedItemName: string | null;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [lastAddedItemName, setLastAddedItemName] = useState<string | null>(
    null
  );

  const addItem = useCallback((item: OrderItem) => {
    setCartItems((current) => {
      const existing = current.find((cartItem) => cartItem.item.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...current, { item, quantity: 1 }];
    });
    setLastAddedItemName(item.name);
  }, []);

  const increaseQuantity = useCallback((itemId: string) => {
    setCartItems((current) =>
      current.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }, []);

  const decreaseQuantity = useCallback((itemId: string) => {
    setCartItems((current) =>
      current
        .map((cartItem) =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setCartItems((current) =>
      current.filter((cartItem) => cartItem.item.id !== itemId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
      ),
    [cartItems]
  );

  const itemCount = useMemo(
    () => cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    [cartItems]
  );

  useEffect(() => {
    if (!lastAddedItemName) {
      return;
    }
    const timeout = window.setTimeout(() => setLastAddedItemName(null), 1600);
    return () => window.clearTimeout(timeout);
  }, [lastAddedItemName]);

  const value = useMemo(
    () => ({
      cartItems,
      addItem,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart,
      total,
      itemCount,
      lastAddedItemName,
    }),
    [
      addItem,
      cartItems,
      clearCart,
      decreaseQuantity,
      increaseQuantity,
      itemCount,
      lastAddedItemName,
      removeItem,
      total,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart muss innerhalb eines CartProvider verwendet werden");
  }
  return context;
}

export function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    total,
  } = useCart();

  return (
    <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 md:sticky md:top-24">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900">Dein Warenkorb</h2>
        <p className="text-sm text-slate-500">
          Prüfe deine Auswahl und passe sie nach Wunsch an.
        </p>
      </div>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-sm text-slate-500">
            Füge deiner Bestellung Lieblingsgerichte hinzu.
          </p>
        ) : (
          cartItems.map((cartItem) => (
            <div
              key={cartItem.item.id}
              className="flex items-start justify-between gap-3 rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200"
            >
              <div>
                <p className="font-medium text-slate-900">
                  {cartItem.item.name}
                </p>
                <p className="text-xs text-slate-500">
                  {currencyFormatter.format(cartItem.item.price)} / Stück
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full bg-slate-100">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(cartItem.item.id)}
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900"
                    aria-label={`${cartItem.item.name} verringern`}
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-slate-900">
                    {cartItem.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(cartItem.item.id)}
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900"
                    aria-label={`${cartItem.item.name} erhöhen`}
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {currencyFormatter.format(
                      cartItem.item.price * cartItem.quantity
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(cartItem.item.id)}
                    className="text-xs text-rose-500 hover:text-rose-600"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
          <span>Gesamt</span>
          <span>{currencyFormatter.format(total)}</span>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 hover:shadow-md"
          >
            Zur Kasse
          </button>
        </div>
      </div>
    </div>
  );
}
