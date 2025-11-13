import { OrderLayout } from "@/components/order/OrderLayout";

export default function BestellenPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <OrderLayout />
      </div>
    </main>
  );
}
