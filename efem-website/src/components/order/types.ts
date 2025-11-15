export type FulfillmentType = "delivery" | "pickup" | null;

export type TimeMode = "asap" | "later";

export type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  notes: string;
  paymentMethod:
    | "cash_delivery"
    | "card_delivery"
    | "cash_pickup"
    | "card_pickup"
    | "paypal"
    | "";
};

export type CheckoutErrors = Partial<
  Record<keyof CheckoutForm | "fulfillmentType", string>
>;
