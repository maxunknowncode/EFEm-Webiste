import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { menuData } from "@/components/order/data";

const sortedCategories = [...menuData.categories].sort(
  (a, b) => a.order - b.order
);

const MenuPage = () => {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-16">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            Unsere Speisekarte
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Alle Kategorien auf einen Blick
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:mx-0">
            Blättere durch alle Spezialitäten von Kebap über Pasta bis zu Desserts. Die gleichen Daten wie beim Bestellen – nur zum Stöbern.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {sortedCategories.map((category) => {
            const items = menuData.items.filter(
              (item) => item.categoryId === category.id
            );

            return (
              <section key={category.id} id={category.id} className="space-y-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {category.name}
                  </h2>
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {items.length} Gerichte
                  </span>
                </div>
                <div className="space-y-4">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                  {items.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
                      Hier erscheinen bald Gerichte dieser Kategorie.
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
