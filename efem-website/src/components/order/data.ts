export type OrderItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  spicy?: boolean;
  vegetarian?: boolean;
};

export type OrderCategory = {
  id: string;
  name: string;
  items: OrderItem[];
};

export type CartItem = OrderItem & {
  quantity: number;
};

export const orderCategories: OrderCategory[] = [
  {
    id: "kebap",
    name: "Kebap",
    items: [
      {
        id: "classic-doner",
        name: "Klassischer Döner",
        description: "Frisch gegrilltes Kalbfleisch, Salatmix, Tomaten, rote Zwiebeln und hausgemachte Joghurtsauce im fluffigen Fladenbrot.",
        price: 7.5,
      },
      {
        id: "anadolu-teller",
        name: "Anadolu Teller",
        description: "Zartes Kalbfleisch auf knusprigen Pommes, dazu Salat, Coleslaw und pikante Kräutersauce.",
        price: 12.9,
        spicy: true,
      },
      {
        id: "halloumi-doner",
        name: "Halloumi Döner",
        description: "Gegrillter Halloumi, Ofengemüse, Rucola und Zitronen-Tahin-Dressing im Sesam-Fladen.",
        price: 8.5,
        vegetarian: true,
      },
    ],
  },
  {
    id: "rollen",
    name: "Rollen",
    items: [
      {
        id: "falafel-wrap",
        name: "Falafel Wrap",
        description: "Knusprige Falafel, karamellisierte Zwiebeln, Gurkenpickles und Tahin-Crème in hausgemachter Tortilla.",
        price: 8.2,
        vegetarian: true,
      },
      {
        id: "adana-wrap",
        name: "Adana Wrap",
        description: "Feurig gewürztes Rindfleisch, Minzjoghurt, Granatapfelkerne und Petersilien-Salat.",
        price: 8.9,
        spicy: true,
      },
      {
        id: "chicken-wrap",
        name: "Chicken Wrap",
        description: "Gegrilltes Zitronenhähnchen, Avocado, Babyleaf und Limetten-Aioli.",
        price: 8.4,
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        id: "truffle-pizza",
        name: "Trüffel Bianco",
        description: "Crème fraîche, Fior di Latte, sautierte Pilze, schwarzes Trüffelöl und Microgreens.",
        price: 13.5,
        vegetarian: true,
      },
      {
        id: "spicy-diavola",
        name: "Spicy Diavola",
        description: "San Marzano Tomaten, Fior di Latte, pikante Salsiccia, Chili-Honig und Basilikum.",
        price: 12.9,
        spicy: true,
      },
      {
        id: "margherita-nova",
        name: "Margherita Nova",
        description: "Hausgemachte Tomatensauce, Fior di Latte, Basilikum und kaltgepresstes Olivenöl.",
        price: 10.5,
        vegetarian: true,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      {
        id: "sweet-potato-fries",
        name: "Süßkartoffel Frites",
        description: "Ofenknusprige Süßkartoffeln, Meersalz und Limetten-Mayo.",
        price: 4.9,
        vegetarian: true,
      },
      {
        id: "halloumi-bites",
        name: "Halloumi Bites",
        description: "Würziger Halloumi in Tempurateig mit Zitrus-Dip.",
        price: 5.5,
        vegetarian: true,
      },
      {
        id: "olive-duo",
        name: "Oliven Duo",
        description: "Mediterrane grüne & schwarze Oliven mit Rosmarin und Orangenabrieb.",
        price: 3.8,
        vegetarian: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "Getränke",
    items: [
      {
        id: "rose-limonade",
        name: "Rosmarin Limonade",
        description: "Hausgemachte Limonade mit Rosmarin, Grapefruit und spritzigem Mineralwasser.",
        price: 3.5,
        vegetarian: true,
      },
      {
        id: "cold-brew-rose",
        name: "Cold Brew Rose",
        description: "Kaltgebrühter Kaffee mit Rosenwasser, Mandelmilch und Vanille.",
        price: 4.2,
      },
      {
        id: "sparkling-apple",
        name: "Apfel & Ingwer Spritz",
        description: "Apfelsaft, frischer Ingwer, Zitrone und Sodawasser.",
        price: 3.7,
      },
    ],
  },
];
