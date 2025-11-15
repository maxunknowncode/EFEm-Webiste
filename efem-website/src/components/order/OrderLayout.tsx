"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Cart, CartProvider, useCart } from "./Cart";
import { CategorySidebar } from "./CategorySidebar";
import {
  CheckoutSection,
  type CheckoutConfirmation,
  type PaymentOption,
} from "./CheckoutSection";
import { MenuContent } from "./MenuContent";
import { OrderHeader } from "./OrderHeader";
import { menuData, type OrderItem } from "./data";
import { locations, type LocationId } from "./locations";
import type {
  CheckoutErrors,
  CheckoutForm,
  FulfillmentType,
  TimeMode,
} from "./types";

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

const initialCheckoutForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  houseNumber: "",
  postalCode: "",
  city: "",
  notes: "",
  paymentMethod: "",
};

const paymentMethodOptions: Record<
  Exclude<FulfillmentType, null>,
  PaymentOption[]
> = {
  delivery: [
    { id: "cash_delivery", label: "Barzahlung bei Lieferung" },
    { id: "card_delivery", label: "Kartenzahlung bei Lieferung" },
    { id: "paypal", label: "PayPal" },
  ],
  pickup: [
    { id: "cash_pickup", label: "Barzahlung im Restaurant" },
    { id: "card_pickup", label: "Kartenzahlung im Restaurant" },
    { id: "paypal", label: "PayPal" },
  ],
};

const fulfillmentLabels: Record<Exclude<FulfillmentType, null>, string> = {
  delivery: "Lieferung",
  pickup: "Abholung",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const deliveryFields: (keyof CheckoutForm)[] = [
  "street",
  "houseNumber",
  "postalCode",
  "city",
];

const baseRequiredFields: (keyof CheckoutForm)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "paymentMethod",
];

const formatScheduledDisplay = (date: string, time: string) => {
  if (!date || !time) {
    return null;
  }
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) {
    return `${date} ${time}`;
  }
  return `${day}.${month}.${year} um ${time} Uhr`;
};

function OrderLayoutContent() {
  const sortedCategories = useMemo(
    () => [...menuData.categories].sort((a, b) => a.order - b.order),
    []
  );
  const [activeCategoryId, setActiveCategoryId] = useState(
    sortedCategories[0]?.id ?? ""
  );
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationId>(
    "nordhorn"
  );
  const [fulfillmentType, setFulfillmentType] =
    useState<FulfillmentType>(null);
  const [timeMode, setTimeMode] = useState<TimeMode>("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const scheduledAtValue =
    timeMode === "later" && scheduledDate && scheduledTime
      ? `${scheduledDate}T${scheduledTime}`
      : null;
  const scheduledAtDisplay =
    timeMode === "later" && scheduledDate && scheduledTime
      ? formatScheduledDisplay(scheduledDate, scheduledTime)
      : null;
  const [checkout, setCheckout] = useState<CheckoutForm>(initialCheckoutForm);
  const [checkoutErrors, setCheckoutErrors] = useState<CheckoutErrors>({});
  const [confirmation, setConfirmation] =
    useState<CheckoutConfirmation | null>(null);
  const [inlineMessage, setInlineMessage] = useState<string | null>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [highlightCheckout, setHighlightCheckout] = useState(false);
  const { addItem, cartItems, total, clearCart } = useCart();

  const activeLocation = useMemo(
    () => locations.find((location) => location.id === selectedLocation),
    [selectedLocation]
  );

  const paymentOptions = fulfillmentType
    ? paymentMethodOptions[fulfillmentType]
    : [];

  useEffect(() => {
    if (!highlightCheckout) {
      return;
    }
    const timeout = window.setTimeout(() => setHighlightCheckout(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [highlightCheckout]);

  useEffect(() => {
    if (!inlineMessage) {
      return;
    }
    const timeout = window.setTimeout(() => setInlineMessage(null), 3000);
    return () => window.clearTimeout(timeout);
  }, [inlineMessage]);

  useEffect(() => {
    if (!fulfillmentType) {
      setCheckout((prev) =>
        prev.paymentMethod ? { ...prev, paymentMethod: "" } : prev
      );
      return;
    }
    const allowed = paymentMethodOptions[fulfillmentType].map(
      (option) => option.id
    );
    setCheckout((prev) => {
      if (allowed.includes(prev.paymentMethod)) {
        return prev;
      }
      return { ...prev, paymentMethod: "" };
    });
  }, [fulfillmentType]);

  useEffect(() => {
    if (fulfillmentType === "delivery") {
      return;
    }
    setCheckoutErrors((prev) => {
      const { street, houseNumber, postalCode, city, ...rest } = prev;
      return rest;
    });
  }, [fulfillmentType]);

  const clearCheckoutError = (field: keyof CheckoutErrors) => {
    setCheckoutErrors((prev) => {
      if (!(field in prev)) {
        return prev;
      }
      const { [field]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleCheckoutChange = <K extends keyof CheckoutForm>(
    field: K,
    value: CheckoutForm[K]
  ) => {
    setCheckout((prev) => ({ ...prev, [field]: value }));
    clearCheckoutError(field);
    if (confirmation) {
      setConfirmation(null);
    }
  };

  const handleSelectFulfillment = (type: Exclude<FulfillmentType, null>) => {
    setFulfillmentType(type);
    clearCheckoutError("fulfillmentType");
    setInlineMessage(null);
    if (confirmation) {
      setConfirmation(null);
    }
  };

  const handleAddItem = (item: OrderItem) => {
    if (!fulfillmentType) {
      setInlineMessage("Bitte zuerst Lieferung oder Abholung auswählen.");
      return;
    }
    addItem(item);
    if (confirmation) {
      setConfirmation(null);
    }
  };

  const handleCheckoutNavigate = () => {
    if (cartItems.length === 0) {
      setInlineMessage("Der Warenkorb ist leer.");
      return;
    }
    setIsMobileCartOpen(false);
    setHighlightCheckout(true);
    checkoutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const requiredFields = [
    ...baseRequiredFields,
    ...(fulfillmentType === "delivery" ? deliveryFields : []),
  ];

  const isFormComplete =
    cartItems.length > 0 &&
    fulfillmentType !== null &&
    requiredFields.every((field) =>
      checkout[field].toString().trim().length > 0
    );

  const validateCheckout = () => {
    const errors: CheckoutErrors = {};

    if (!fulfillmentType) {
      errors.fulfillmentType = "Bitte Lieferart auswählen.";
    }

    if (!checkout.firstName.trim()) {
      errors.firstName = "Bitte Vorname eingeben.";
    }
    if (!checkout.lastName.trim()) {
      errors.lastName = "Bitte Nachname eingeben.";
    }
    if (!checkout.email.trim()) {
      errors.email = "Bitte E-Mail eingeben.";
    } else if (!emailPattern.test(checkout.email.trim())) {
      errors.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
    }
    if (!checkout.phone.trim()) {
      errors.phone = "Bitte Telefonnummer angeben.";
    }

    if (fulfillmentType === "delivery") {
      if (!checkout.street.trim()) {
        errors.street = "Bitte Straße angeben.";
      }
      if (!checkout.houseNumber.trim()) {
        errors.houseNumber = "Bitte Hausnummer angeben.";
      }
      if (!checkout.postalCode.trim()) {
        errors.postalCode = "Bitte PLZ angeben.";
      }
      if (!checkout.city.trim()) {
        errors.city = "Bitte Ort angeben.";
      }
    }

    if (!checkout.paymentMethod) {
      errors.paymentMethod = "Bitte Zahlungsmethode wählen.";
    }

    setCheckoutErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitCheckout = () => {
    if (!validateCheckout()) {
      return;
    }

    const orderPayload = {
      cartItems,
      checkout,
      fulfillmentType,
      timeMode,
      scheduledAt: scheduledAtValue,
      location: activeLocation,
      total,
    };
    console.log("Bestellung:", orderPayload);

    const selectedFulfillment = fulfillmentType ?? "delivery";
    const paymentLabel = paymentMethodOptions[selectedFulfillment].find(
      (option) => option.id === checkout.paymentMethod
    )?.label;

    setConfirmation({
      locationName: activeLocation?.name ?? "EFEm",
      fulfillmentLabel: fulfillmentLabels[selectedFulfillment],
      paymentLabel: paymentLabel ?? "Unbekannte Zahlungsart",
      total: currencyFormatter.format(total),
      timeInfo:
        timeMode === "later" && scheduledAtDisplay
          ? `Geplant für ${scheduledAtDisplay}`
          : "Schnellstmögliche Zubereitung",
    });

    clearCart();
    setCheckout(initialCheckoutForm);
    setCheckoutErrors({});
  };

  return (
    <>
      <main className="flex-1 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 pb-32 space-y-8 lg:px-6 lg:pb-16">
          <OrderHeader
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
            fulfillmentType={fulfillmentType}
            onSelectFulfillment={handleSelectFulfillment}
            fulfillmentError={checkoutErrors.fulfillmentType}
            timeMode={timeMode}
            onTimeModeChange={setTimeMode}
            scheduledDate={scheduledDate}
            onScheduledDateChange={setScheduledDate}
            scheduledTime={scheduledTime}
            onScheduledTimeChange={setScheduledTime}
          />
          {inlineMessage ? (
            <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {inlineMessage}
            </div>
          ) : null}
          <div className="space-y-6 md:grid md:grid-cols-[220px_minmax(0,1fr)_320px] md:gap-6 md:space-y-0">
            <aside className="md:sticky md:top-24">
              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <CategorySidebar
                  activeCategoryId={activeCategoryId}
                  onSelectCategory={setActiveCategoryId}
                />
              </div>
            </aside>
            <section className="min-w-0 space-y-6">
              <MenuContent
                activeCategoryId={activeCategoryId}
                onAddItem={handleAddItem}
              />
            </section>
            <aside className="hidden md:block">
              <Cart onCheckout={handleCheckoutNavigate} />
            </aside>
          </div>
          <CheckoutSection
            ref={checkoutRef}
            cartItems={cartItems}
            checkout={checkout}
            checkoutErrors={checkoutErrors}
            onChange={handleCheckoutChange}
            onSubmit={handleSubmitCheckout}
            disabled={!isFormComplete}
            fulfillmentType={fulfillmentType}
            paymentOptions={paymentOptions}
            highlight={highlightCheckout}
            total={total}
            confirmation={confirmation}
          />
        </div>
      </main>
      <MobileCartDrawer
        open={isMobileCartOpen}
        onClose={() => setIsMobileCartOpen(false)}
        onCheckout={handleCheckoutNavigate}
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
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
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
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-cart-title"
    >
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
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
            onClick={() => {
              if (cartItems.length === 0) {
                return;
              }
              onCheckout();
            }}
            className="w-full rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600"
          >
            Zur Kasse
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
