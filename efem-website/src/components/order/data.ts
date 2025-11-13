export type OrderItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  spicy?: boolean;
  vegetarian?: boolean;
  categoryId: string;
};

export type OrderCategory = {
  id: string;
  name: string;
  order: number;
};

export type MenuData = {
  categories: OrderCategory[];
  items: OrderItem[];
};

export const menuData: MenuData = {
  categories: [
    { id: "kebap", name: "Kebap", order: 1 },
    { id: "fladenbrotrollen", name: "Fladenbrotrollen", order: 2 },
    { id: "pizza-schnecken", name: "Pizza-Schnecken", order: 3 },
    { id: "pomm-box", name: "Pomm-Box", order: 4 },
    { id: "pizza", name: "Pizza", order: 5 },
    { id: "vegetarische-pizza", name: "Vegetarische Pizza", order: 6 },
    { id: "taschenpizza", name: "Taschenpizza", order: 7 },
    { id: "finger-food-menue", name: "Finger Food Menü", order: 8 },
    { id: "fingerfood", name: "Fingerfood", order: 9 },
    { id: "pasta", name: "Pasta", order: 10 },
    { id: "auflauf", name: "Auflauf", order: 11 },
    { id: "salat", name: "Salat", order: 12 },
    { id: "snacks", name: "Snacks", order: 13 },
    { id: "dips", name: "Dips", order: 14 },
    { id: "getraenke", name: "Getränke", order: 15 },
  ],
  items: [
    {
      id: "döner-teller",
      name: "Döner Teller",
      description: "Saftiges Kalbfleisch mit knackigem Salat, Pommes und zweierlei Saucen.",
      price: 11.5,
      categoryId: "kebap",
    },
    {
      id: "döner-im-fladenbrot",
      name: "Döner im Fladenbrot",
      description: "Frisch gebackenes Fladenbrot mit Kalbfleisch, Salatmix und Sauce nach Wahl.",
      price: 7.9,
      categoryId: "kebap",
    },
    {
      id: "sucuk-rollo",
      name: "Sucuk Rollo",
      description: "Knusprig gerolltes Fladenbrot mit würziger Sucuk und Käse.",
      price: 8.5,
      categoryId: "fladenbrotrollen",
      spicy: true,
    },
    {
      id: "margherita",
      name: "Pizza Margherita",
      description: "Hausgemachte Tomatensauce, Mozzarella und frisches Basilikum.",
      price: 8.9,
      categoryId: "pizza",
      vegetarian: true,
    },
    {
      id: "pommbox-classic",
      name: "Pomm-Box Classic",
      description: "Knusprige Pommes, Kalbfleischstreifen und hausgemachte Joghurtsauce.",
      price: 9.5,
      categoryId: "pomm-box",
    },
    {
      id: "salat-griechisch",
      name: "Griechischer Salat",
      description: "Frische Gurken, Tomaten, Oliven und Feta mit Kräuterdressing.",
      price: 7.2,
      categoryId: "salat",
      vegetarian: true,
    },
    {
      id: "cola-05",
      name: "Coca-Cola 0,5l",
      description: "Gekühltes Erfrischungsgetränk.",
      price: 2.8,
      categoryId: "getraenke",
    },
  ],
};
