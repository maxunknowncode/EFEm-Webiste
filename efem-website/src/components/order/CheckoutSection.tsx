"use client";

import { forwardRef } from "react";

import type { CartItem } from "./data";
import type { CheckoutErrors, CheckoutForm, FulfillmentType } from "./types";

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export type PaymentOption = {
  id: CheckoutForm["paymentMethod"];
  label: string;
  description?: string;
};

export type CheckoutConfirmation = {
  locationName: string;
  fulfillmentLabel: string;
  paymentLabel: string;
  total: string;
  timeInfo?: string;
};

type CheckoutSectionProps = {
  cartItems: CartItem[];
  checkout: CheckoutForm;
  checkoutErrors: CheckoutErrors;
  onChange: <K extends keyof CheckoutForm>(
    field: K,
    value: CheckoutForm[K]
  ) => void;
  onSubmit: () => void;
  disabled: boolean;
  fulfillmentType: FulfillmentType;
  paymentOptions: PaymentOption[];
  highlight?: boolean;
  total: number;
  confirmation?: CheckoutConfirmation | null;
};

export const CheckoutSection = forwardRef<HTMLDivElement, CheckoutSectionProps>(
  function CheckoutSection(
    {
      cartItems,
      checkout,
      checkoutErrors,
      onChange,
      onSubmit,
      disabled,
      fulfillmentType,
      paymentOptions,
      highlight,
      total,
      confirmation,
    },
    ref
  ) {
    const renderInput = (
      field: keyof CheckoutForm,
      label: string,
      props?: { type?: string; placeholder?: string; disabled?: boolean }
    ) => (
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor={field}>
          {label}
        </label>
        <input
          id={field}
          name={field}
          type={props?.type ?? "text"}
          placeholder={props?.placeholder}
          disabled={props?.disabled}
          value={checkout[field] as string}
          onChange={(event) => onChange(field, event.target.value)}
          className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 ${
            props?.disabled
              ? "border-slate-100 bg-slate-50 text-slate-400"
              : "border-slate-200"
          } ${checkoutErrors[field] ? "border-rose-300" : ""}`}
        />
        {checkoutErrors[field] ? (
          <p className="mt-1 text-xs text-rose-500">{checkoutErrors[field]}</p>
        ) : null}
      </div>
    );

    return (
      <section
        ref={ref}
        className={`space-y-6 rounded-3xl bg-white p-6 shadow-sm transition ring-1 md:p-8 ${
          highlight ? "ring-rose-200 shadow-md" : "ring-slate-100"
        }`}
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-900">Bestelldaten</h2>
          <p className="text-sm text-slate-500">
            Bitte gib deine Kontaktdaten und ggf. die Lieferadresse ein.
          </p>
        </div>

        {confirmation ? (
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
            <p className="font-semibold">Vielen Dank! Deine Bestellung wurde aufgenommen (Demo).</p>
            <ul className="mt-2 space-y-1">
              <li>Standort: {confirmation.locationName}</li>
              <li>Lieferart: {confirmation.fulfillmentLabel}</li>
              <li>Zahlungsart: {confirmation.paymentLabel}</li>
              <li>Summe: {confirmation.total}</li>
              {confirmation.timeInfo ? <li>{confirmation.timeInfo}</li> : null}
            </ul>
          </div>
        ) : null}

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-500">
            Lege zuerst Gerichte in den Warenkorb, um fortzufahren.
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              if (!disabled) {
                onSubmit();
              }
            }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {renderInput("firstName", "Vorname")}
                {renderInput("lastName", "Nachname")}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {renderInput("email", "E-Mail", {
                  type: "email",
                  placeholder: "du@example.com",
                })}
                {renderInput("phone", "Telefonnummer", {
                  type: "tel",
                  placeholder: "+49 ...",
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  Lieferadresse
                </p>
                {fulfillmentType !== "delivery" ? (
                  <span className="text-xs text-slate-400">
                    Für Abholung nicht erforderlich
                  </span>
                ) : null}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {renderInput("street", "Straße", {
                  disabled: fulfillmentType !== "delivery",
                })}
                {renderInput("houseNumber", "Hausnummer", {
                  disabled: fulfillmentType !== "delivery",
                })}
                {renderInput("postalCode", "PLZ", {
                  disabled: fulfillmentType !== "delivery",
                })}
                {renderInput("city", "Ort", {
                  disabled: fulfillmentType !== "delivery",
                })}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="notes">
                Notizen zur Bestellung (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={checkout.notes}
                onChange={(event) => onChange("notes", event.target.value)}
                rows={3}
                placeholder="Hinweise für unser Team"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Zahlungsmethode</p>
              <div className="space-y-2">
                {paymentOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                      checkout.paymentMethod === option.id
                        ? "border-slate-900 bg-slate-900/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-slate-900">{option.label}</p>
                      {option.description ? (
                        <p className="text-xs text-slate-500">{option.description}</p>
                      ) : null}
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={option.id}
                      checked={checkout.paymentMethod === option.id}
                      onChange={() => onChange("paymentMethod", option.id)}
                      className="h-4 w-4 border-slate-300 text-rose-500 focus:ring-rose-500"
                    />
                  </label>
                ))}
              </div>
              {checkoutErrors.paymentMethod ? (
                <p className="text-xs text-rose-500">
                  {checkoutErrors.paymentMethod}
                </p>
              ) : null}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                <span>Gesamt</span>
                <span>{currencyFormatter.format(total)}</span>
              </div>
              <button
                type="submit"
                disabled={disabled}
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
              >
                Bestellung abschicken
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
);

CheckoutSection.displayName = "CheckoutSection";
