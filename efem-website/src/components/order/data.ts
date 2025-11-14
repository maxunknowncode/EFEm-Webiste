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

const fladenbrotrollenItems: OrderItem[] = [
  {
    id: "20",
    categoryId: "fladenbrotrollen",
    name: "Sucuk Rolle",
    description:
      "Türkische Knoblauchwurst im Pizzateig gerollt, dazu Tomaten, Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Remoulade, mit Käse überbacken.",
    price: 6.5,
  },
  {
    id: "21",
    categoryId: "fladenbrotrollen",
    name: "Thunfisch Rolle",
    description:
      "Thunfisch im Pizzateig gerollt, gefüllt mit Tomaten, Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Remoulade, mit Käse überbacken.",
    price: 6.5,
  },
  {
    id: "22",
    categoryId: "fladenbrotrollen",
    name: "Schinken Rolle",
    description:
      "Schinken im Pizzateig gerollt, zusammen mit Tomaten, Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Remoulade, mit Käse überbacken.",
    price: 6.5,
  },
  {
    id: "23",
    categoryId: "fladenbrotrollen",
    name: "Salami Rolle",
    description:
      "Salami im Pizzateig gerollt, mit Tomaten, Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Remoulade, mit Käse überbacken.",
    price: 6.5,
  },
  {
    id: "24",
    categoryId: "fladenbrotrollen",
    name: "Vegetarische Rolle",
    description:
      "Vegetarische Rolle im Pizzateig mit frischer Paprika, Tomaten, Weiß- und Rotkraut, Zwiebeln, Eisbergsalat und Remoulade, mit Käse überbacken.",
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "25",
    categoryId: "fladenbrotrollen",
    name: "Falafel Rolle",
    description:
      "Falafel im Pizzateig gerollt, mit Tomaten, sauren Gurken, Eisbergsalat und Knoblauchsoße.",
    price: 7.0,
    vegetarian: true,
  },
  {
    id: "26",
    categoryId: "fladenbrotrollen",
    name: "Pomm-Rolle",
    description:
      "Rolle im Pizzateig mit Kebapfleisch, Pommes frites, Zwiebeln, Mayonnaise und Ketchup.",
    price: 7.0,
  },
  {
    id: "27",
    categoryId: "fladenbrotrollen",
    name: "Sucuk Chili-Cheese-Rolle",
    description:
      "Knoblauchwurst im Pizzateig gerollt, mit Tomaten, Eisbergsalat, Zwiebeln, Chili-Cheese-Sauce und Jalapenos, mit Käse überbacken.",
    price: 7.5,
    spicy: true,
  },
];

const pizzaSchneckenItems: OrderItem[] = [
  {
    id: "30",
    categoryId: "pizza-schnecken",
    name: "30. (8 Stück) gefüllte Pizzaschnecken",
    description:
      "Acht gefüllte Pizzaschnecken mit kleinem Salat und einem Dip nach Wahl.",
    price: 9.0,
  },
];

const pommBoxItems: OrderItem[] = [
  {
    id: "35",
    categoryId: "pomm-box",
    name: "Pomm-Box",
    description:
      "Pommes frites mit Kebap- oder Hähnchenfleisch, dazu Tzatziki, Krautsalat und Zwiebeln.",
    price: 6.0,
  },
  {
    id: "36",
    categoryId: "pomm-box",
    name: "Kapsalon Kebap",
    description:
      "Pommes frites mit Kebapfleisch, mit Cheddar und Goudakäse überbacken, dazu Eisbergsalat und Knoblauchsoße.",
    price: 9.0,
  },
];

const pizzaItems: OrderItem[] = [
  {
    id: "40",
    categoryId: "pizza",
    name: "Kebap Pizza",
    description:
      "Tomatensauce, Kebapfleisch, Tomaten, Zwiebeln, Käse und Oregano.",
    price: 9.0,
  },
  {
    id: "41",
    categoryId: "pizza",
    name: "Kebap Pizza Spezial",
    description:
      "Tomatensauce, Kebapfleisch, Paprika, Tomaten, Zwiebeln, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "42",
    categoryId: "pizza",
    name: "Hähnchen Kebap Pizza",
    description:
      "Tomatensauce, Hähnchenfleisch, Paprika, Mais, Käse und Oregano.",
    price: 9.0,
  },
  {
    id: "43",
    categoryId: "pizza",
    name: "Hähnchen Kebap Pizza Spezial",
    description:
      "Tomatensauce, Hähnchenfleisch, Paprika, Tomaten, Zwiebeln, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "44",
    categoryId: "pizza",
    name: "Mix Pizza",
    description:
      "Tomatensauce, Kebap- und Hähnchenfleisch, Paprika, Tomaten, Zwiebeln, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "45",
    categoryId: "pizza",
    name: "Sucuk Pizza",
    description: "Tomatensauce, Sucuk, Paprika, Zwiebeln, Käse und Oregano.",
    price: 9.0,
  },
  {
    id: "46",
    categoryId: "pizza",
    name: "Sucuk Pizza Spezial",
    description:
      "Tomatensauce, Sucuk, Paprika, Jalapenos, Tomaten, Käse und Oregano.",
    price: 9.5,
    spicy: true,
  },
  {
    id: "47",
    categoryId: "pizza",
    name: "Falafel Pizza",
    description: "Tomatensauce, Falafel, Paprika, Tomaten, Käse und Oregano.",
    price: 9.0,
    vegetarian: true,
  },
  {
    id: "48",
    categoryId: "pizza",
    name: "Vegetarische Pizza",
    description:
      "Tomatensauce, Paprika, Brokkoli, Mais, Zwiebeln, Käse und Oregano.",
    price: 8.5,
    vegetarian: true,
  },
  {
    id: "49",
    categoryId: "pizza",
    name: "Pizza Margherita",
    description: "Tomatensauce, Mozzarella, frisches Basilikum und Oregano.",
    price: 8.0,
    vegetarian: true,
  },
  {
    id: "50",
    categoryId: "pizza",
    name: "Pizza Funghi",
    description: "Tomatensauce, Champignons, Käse und Oregano.",
    price: 8.5,
    vegetarian: true,
  },
  {
    id: "51",
    categoryId: "pizza",
    name: "Pizza Prosciutto",
    description: "Tomatensauce, Kochschinken, Käse und Oregano.",
    price: 9.0,
  },
  {
    id: "52",
    categoryId: "pizza",
    name: "Pizza Salami",
    description: "Tomatensauce, Salami, Käse und Oregano.",
    price: 9.0,
  },
  {
    id: "53",
    categoryId: "pizza",
    name: "Pizza Tonno",
    description: "Tomatensauce, Thunfisch, Zwiebeln, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "54",
    categoryId: "pizza",
    name: "Pizza Hawaii",
    description: "Tomatensauce, Kochschinken, Ananas, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "55",
    categoryId: "pizza",
    name: "Pizza Capricciosa",
    description:
      "Tomatensauce, Kochschinken, Champignons, Artischocken, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "56",
    categoryId: "pizza",
    name: "Pizza Quattro Stagioni",
    description:
      "Tomatensauce, Salami, Kochschinken, Champignons, Paprika, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "57",
    categoryId: "pizza",
    name: "Pizza Quattro Formaggi",
    description: "Tomatensauce, vier Käsesorten und Oregano.",
    price: 10.0,
    vegetarian: true,
  },
  {
    id: "58",
    categoryId: "pizza",
    name: "Pizza Diabolo",
    description:
      "Tomatensauce, Salami, Peperoniwurst, Jalapenos, Käse und Oregano.",
    price: 9.5,
    spicy: true,
  },
  {
    id: "59",
    categoryId: "pizza",
    name: "Pizza Bolognese",
    description: "Tomatensauce, Rinderhack, Zwiebeln, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "60",
    categoryId: "pizza",
    name: "Pizza Calzone",
    description:
      "Gefaltete Pizza mit Tomatensauce, Kochschinken, Salami, Champignons, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "61",
    categoryId: "pizza",
    name: "Pizza Spinaci",
    description: "Tomatensauce, Spinat, Zwiebeln, Käse und Oregano.",
    price: 9.0,
    vegetarian: true,
  },
  {
    id: "62",
    categoryId: "pizza",
    name: "Pizza Brokkoli",
    description: "Tomatensauce, Brokkoli, Mais, Käse und Oregano.",
    price: 9.0,
    vegetarian: true,
  },
  {
    id: "63",
    categoryId: "pizza",
    name: "Pizza Rucola",
    description: "Tomatensauce, Mozzarella, Rucola, Cherrytomaten, Parmesan und Oregano.",
    price: 9.5,
    vegetarian: true,
  },
  {
    id: "64",
    categoryId: "pizza",
    name: "Pizza BBQ Chicken",
    description:
      "BBQ-Sauce, Hähnchenbrust, rote Zwiebeln, Mais, Käse und frische Petersilie.",
    price: 10.0,
  },
  {
    id: "65",
    categoryId: "pizza",
    name: "Pizza Frutti di Mare",
    description: "Tomatensauce, Meeresfrüchte, Knoblauch, Käse und Oregano.",
    price: 11.0,
  },
  {
    id: "66",
    categoryId: "pizza",
    name: "Pizza Gyros",
    description:
      "Tomatensauce, Gyrosfleisch, Zwiebeln, Paprika, Käse und Oregano.",
    price: 10.5,
  },
  {
    id: "67",
    categoryId: "pizza",
    name: "Pizza Efem Spezial",
    description:
      "Tomatensauce, Rinderhack, Peperoni, Paprika, Zwiebeln, Käse und Oregano.",
    price: 10.5,
  },
  {
    id: "68",
    categoryId: "pizza",
    name: "Pizza Chef",
    description:
      "Tomatensauce, Salami, Kochschinken, Champignons, Peperoni, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "69",
    categoryId: "pizza",
    name: "Pizza Istanbul",
    description:
      "Tomatensauce, Kebapfleisch, Peperoni, Tomaten, Zwiebeln, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "70",
    categoryId: "pizza",
    name: "Pizza Nordhorn",
    description:
      "Tomatensauce, Kebapfleisch, Rinderhack, Peperoni, Jalapenos, rote Zwiebeln, Käse und Oregano.",
    price: 11.5,
    spicy: true,
  },
  {
    id: "71",
    categoryId: "pizza",
    name: "Pizza Parma",
    description: "Tomatensauce, Parmaschinken, Rucola, Parmesan, Käse und Oregano.",
    price: 11.0,
  },
  {
    id: "72",
    categoryId: "pizza",
    name: "Pizza Calabrese",
    description:
      "Tomatensauce, scharfe Salami, Peperoni, Jalapenos, Käse und Oregano.",
    price: 10.5,
    spicy: true,
  },
  {
    id: "73",
    categoryId: "pizza",
    name: "Pizza Vegetaria Spezial",
    description:
      "Tomatensauce, Spinat, Brokkoli, Paprika, Artischocken, Käse und Oregano.",
    price: 9.8,
    vegetarian: true,
  },
  {
    id: "74",
    categoryId: "pizza",
    name: "Pizza Napoli",
    description: "Tomatensauce, Sardellen, Kapern, Oliven, Käse und Oregano.",
    price: 9.5,
  },
  {
    id: "75",
    categoryId: "pizza",
    name: "Pizza Toscana",
    description:
      "Tomatensauce, Hähnchenbrust, Spinat, Knoblauch, Käse und Oregano.",
    price: 10.0,
  },
  {
    id: "76",
    categoryId: "pizza",
    name: "Pizza Pepperoni",
    description: "Tomatensauce, Peperoniwurst, Paprika, Käse und Oregano.",
    price: 9.5,
    spicy: true,
  },
  {
    id: "77",
    categoryId: "pizza",
    name: "Pizza Gorgonzola",
    description: "Tomatensauce, Gorgonzola, Spinat, rote Zwiebeln, Käse und Oregano.",
    price: 10.0,
    vegetarian: true,
  },
  {
    id: "78",
    categoryId: "pizza",
    name: "Pizza Tonno Cipolla",
    description: "Tomatensauce, Thunfisch, rote Zwiebeln, Käse und Oregano.",
    price: 9.8,
  },
  {
    id: "79",
    categoryId: "pizza",
    name: "Pizza Calzone Kebap",
    description:
      "Gefaltete Pizza mit Tomatensauce, Kebapfleisch, Paprika, Zwiebeln, Käse und Oregano.",
    price: 11.0,
  },
  {
    id: "80",
    categoryId: "pizza",
    name: "Pizza Chef Spezial",
    description:
      "Tomatensauce, Rinderhack, Kebapfleisch, Champignons, Peperoni, Käse und Oregano.",
    price: 11.0,
  },
  {
    id: "81",
    categoryId: "pizza",
    name: "Pizza Istanbul Spezial",
    description:
      "Tomatensauce, Kebapfleisch, Hähnchenfleisch, Paprika, Jalapenos, Käse und Oregano.",
    price: 11.5,
    spicy: true,
  },
  {
    id: "81a",
    categoryId: "pizza",
    name: "Pizza Nordhorn Spezial",
    description:
      "Tomatensauce, Kebapfleisch, Rinderhack, Peperoni, Jalapenos, rote Zwiebeln, Käse und Oregano.",
    price: 12.0,
    spicy: true,
  },
  {
    id: "82",
    categoryId: "pizza",
    name: "Pizza Chef Deluxe",
    description:
      "Tomatensauce, Salami, Kochschinken, Rinderhack, Paprika, Pilze, Käse und Oregano.",
    price: 11.5,
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
    ...kebapItems,
    ...fladenbrotrollenItems,
    ...pizzaSchneckenItems,
    ...pommBoxItems,
    ...pizzaItems,
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
