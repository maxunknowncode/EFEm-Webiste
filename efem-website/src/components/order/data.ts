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

export type CartItem = {
  item: OrderItem;
  quantity: number;
};

const kebapItems: OrderItem[] = [
  {
    id: "1a",
    categoryId: "kebap",
    name: "Großstadt Döner (Pide)",
    description:
      "Kebap in warmem Pidebrot mit Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und cremigem Tzatziki.",
    price: 8.0,
  },
  {
    id: "01",
    categoryId: "kebap",
    name: "Kebap",
    description:
      "Gerollter Kebap im Pizzateig mit Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Tzatziki.",
    price: 8.0,
  },
  {
    id: "02",
    categoryId: "kebap",
    name: "Kebap Spezial",
    description:
      "Kebap im Pizzateig gerollt, gefüllt mit Krautsalat, Zwiebeln und Eisbergsalat, zusätzlich mit Käse überbacken.",
    price: 9.0,
  },
  {
    id: "03",
    categoryId: "kebap",
    name: "Kebap Hirtenkäse Spezial",
    description:
      "Gerollter Kebap im Pizzateig mit Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki, mit Hirtenkäse gratiniert.",
    price: 9.0,
  },
  {
    id: "04",
    categoryId: "kebap",
    name: "Hähnchen Kebap",
    description:
      "Zartes Hähnchenfleisch im Pizzateig gerollt, dazu Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Tzatziki.",
    price: 8.0,
  },
  {
    id: "05",
    categoryId: "kebap",
    name: "Hähnchen Kebap Spezial",
    description:
      "Hähnchen-Kebap im Pizzateig mit Krautsalat, Zwiebeln und Eisbergsalat, zusätzlich mit Käse überbacken.",
    price: 9.0,
  },
  {
    id: "06",
    categoryId: "kebap",
    name: "Kebap Mix",
    description:
      "Kombination aus Kebap- und Hähnchenfleisch im Pizzateig gerollt, mit Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki.",
    price: 9.0,
  },
  {
    id: "06a",
    categoryId: "kebap",
    name: "Kebap Sucuk Spezial",
    description:
      "Kebap im Pizzateig mit Tomaten, Krautsalat, Zwiebeln und Eisbergsalat, mit Käse und Knoblauchwurst überbacken.",
    price: 9.5,
  },
  {
    id: "07",
    categoryId: "kebap",
    name: "Chilli Cheese Kebap",
    description:
      "Kebap mit Käse und Chili-Cheese-Sauce, dazu Tomaten, Krautsalat, Zwiebeln und Eisbergsalat.",
    price: 9.0,
  },
  {
    id: "08",
    categoryId: "kebap",
    name: "Türkische Pizza",
    description:
      "Mit Rinderhack belegter Pizzateig, gerollt und gefüllt mit Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki.",
    price: 7.5,
  },
  {
    id: "09",
    categoryId: "kebap",
    name: "Türkische Pizza Spezial",
    description:
      "Türkische Pizza mit Rinderhack und Kebap, dazu Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki, mit Käse überbacken.",
    price: 8.5,
  },
  {
    id: "10",
    categoryId: "kebap",
    name: "Kebap Teller",
    description:
      "Kebapfleisch mit Tomaten, Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki, serviert mit Pommes frites und Brot.",
    price: 12.5,
  },
  {
    id: "11",
    categoryId: "kebap",
    name: "Kebap Teller Spezial",
    description:
      "Kebapteller mit Käse überbacken, dazu Tomaten, Krautsalat, Zwiebeln, Eisbergsalat, Tzatziki, Pommes frites und Brot.",
    price: 14.0,
  },
  {
    id: "12",
    categoryId: "kebap",
    name: "Hähnchen Teller",
    description:
      "Hähnchenfleisch mit Tomaten, Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki, dazu Pommes frites und Brot.",
    price: 12.5,
  },
  {
    id: "13",
    categoryId: "kebap",
    name: "Mix Teller",
    description:
      "Gemischter Teller mit Kebap- und Hähnchenfleisch, Tomaten, Krautsalat, Zwiebeln, Eisbergsalat, Tzatziki sowie Pommes frites und Brot.",
    price: 13.5,
  },
  {
    id: "14",
    categoryId: "kebap",
    name: "King Teller",
    description:
      "Scharfer Kebap-Teller mit Käse überbacken, Tomaten, Krautsalat, Zwiebeln, Eisbergsalat und Tzatziki, dazu hausgemachtes Lahmacun.",
    price: 14.0,
    spicy: true,
  },
  {
    id: "15",
    categoryId: "kebap",
    name: "Iskender Teller",
    description:
      "Gegrilltes Kebapfleisch auf Brotwürfeln mit Tomaten und Joghurtsauce, verfeinert mit geschmolzener Butter, dazu Pommes frites und Beilagensalat.",
    price: 14.0,
  },
  {
    id: "16",
    categoryId: "kebap",
    name: "Chili Cheese Kebap Teller",
    description:
      "Kebap mit Chili-Cheese-Sauce und Jalapenos überbacken, dazu Tomaten, Krautsalat, Zwiebeln, Eisbergsalat, Tzatziki, Pommes frites und Brot.",
    price: 14.0,
    spicy: true,
  },
];

export const menuData: MenuData = {
  categories: [
    { id: "kebap", name: "Kebap", order: 10 },
    { id: "fladenbrotrollen", name: "Fladenbrotrollen", order: 20 },
    { id: "pizza-schnecken", name: "Pizza-Schnecken", order: 30 },
    { id: "pomm-box", name: "Pomm-Box", order: 40 },
    { id: "pizza", name: "Pizza", order: 50 },
    { id: "vegetarische-pizza", name: "Vegetarische Pizza", order: 60 },
    { id: "taschenpizza", name: "Taschenpizza", order: 70 },
    { id: "finger-food-menue", name: "Finger Food Menü", order: 80 },
    { id: "fingerfood", name: "Fingerfood", order: 90 },
    { id: "pasta", name: "Pasta", order: 100 },
    { id: "auflauf", name: "Auflauf", order: 110 },
    { id: "salat", name: "Salat", order: 120 },
    { id: "snacks", name: "Snacks", order: 130 },
    { id: "dips", name: "Dips", order: 140 },
    { id: "getraenke", name: "Getränke", order: 150 },
  ],
  items: [
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
    ...kebapItems,
  ],
};
