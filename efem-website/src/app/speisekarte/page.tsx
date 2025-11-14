import { MenuCategoryTabs } from "@/components/menu/MenuCategoryTabs";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza",
    items: [
      {
        name: "Pizza Margherita",
        description: "Tomatensauce, Mozzarella, frisches Basilikum",
        price: "8,50 €",
      },
      {
        name: "Pizza Salami",
        description: "Tomatensauce, Mozzarella, italienische Salami",
        price: "9,50 €",
      },
      {
        name: "Pizza Efem Spezial",
        description: "Tomatensauce, Mozzarella, Rinderhack, Peperoni, rote Zwiebeln",
        price: "10,90 €",
      },
    ],
  },
  {
    id: "doener",
    title: "Döner",
    items: [
      {
        name: "Döner im Brot",
        description: "Kalbfleisch, Salatmix, hausgemachte Sauce",
        price: "6,90 €",
      },
      {
        name: "Döner Box",
        description: "Fleisch deiner Wahl, Salat oder Pommes, Sauce",
        price: "7,90 €",
      },
      {
        name: "Döner Teller",
        description: "Kalbfleisch, Reis oder Pommes, Salat, Sauce",
        price: "12,50 €",
      },
    ],
  },
  {
    id: "rollen",
    title: "Rollen",
    items: [
      {
        name: "Chicken Roll",
        description: "Gegrilltes Hähnchen, frischer Salat, Tomaten, Joghurtsauce",
        price: "7,20 €",
      },
      {
        name: "Falafel Roll",
        description: "Hausgemachte Falafel, Granatapfel, Tahini, Kräuter",
        price: "6,80 €",
      },
      {
        name: "Sucuk Roll",
        description: "Würzige Sucuk, Paprika, Gurke, Knoblauch-Joghurt",
        price: "7,40 €",
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Beilagen",
    items: [
      {
        name: "Knusprige Pommes",
        description: "Goldbraun frittierte Kartoffeln mit Gewürzmischung",
        price: "3,90 €",
      },
      {
        name: "Mozzarella Sticks",
        description: "Mit Käsekern und Chili-Dip",
        price: "5,50 €",
      },
      {
        name: "Gemischter Salat",
        description: "Blattsalate, Gurke, Tomate, Hausdressing",
        price: "4,90 €",
      },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    items: [
      {
        name: "Coca-Cola (0,33l)",
        description: "Klassisch gekühlt",
        price: "2,50 €",
      },
      {
        name: "Hausgemachte Ayran",
        description: "Erfrischend und cremig",
        price: "2,20 €",
      },
      {
        name: "Mineralwasser (0,5l)",
        description: "Still oder spritzig",
        price: "2,00 €",
      },
    ],
  },
];

const MenuPage = () => {
  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Speisekarte
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Hier findest du unsere beliebtesten Pizzen, Döner-Variationen und Snacks. Lehne dich zurück und entdecke alle Gerichte in Ruhe.
          </p>
        </div>
        <div className="mt-10">
          <MenuCategoryTabs
            tabs={menuCategories.map((category) => ({
              id: category.id,
              label: category.title,
            }))}
            initialActiveId={menuCategories[0]?.id}
          />
        </div>
        <div className="mt-12 space-y-12">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">{category.title}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-2xl border border-slate-100 bg-white shadow-sm px-5 py-4 flex flex-col gap-2"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                      <span className="text-sm font-semibold text-rose-500 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
