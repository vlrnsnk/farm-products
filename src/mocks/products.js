const products = [
  {
    id: 0,
    name: "Chicken Thigh Fillet",
    description:
      "Thigh fillet without skin and bone. The poultry is kept in free-range coops and fed natural grain feed, which positively affects the taste of the meat. The thigh fillet has a rich flavor and meaty aroma.",
    price: 400,
    weight: 700,
    image: "./img/products/chicken-thigh-fillet.png",
    specifications: [
      {
        property: "Weight",
        value: "0.7 kg (595-805 g).",
      },
      {
        property: "Shelf life",
        value: "6 days",
      },
      {
        property: "Breed",
        value: "Cobb 500",
      },
      {
        property: "Place of origin",
        value: "Tver region",
      },
    ],
    structure: [
      {
        property: "Energy value",
        value: "135 kcal / 565 kJ",
      },
      {
        property: "Nutritional value",
        value:
          "proteins - 13.8 g, fats - 8.7 g, carbohydrates - 0 g; per 100 g.",
      },
    ],
  },
  {
    id: 1,
    name: "Goose Thigh Fillet",
    description:
      "Goose thigh fillet is a thinly sliced product that will appeal to all lovers of dry-cured products. The unusual taste, appetizing aroma, and subtle aftertaste distinguish dry-cured goose from other similar products.",
    price: 500,
    weight: 600,
    image: "./img/products/goose-thigh-fillet.png",
    specifications: [
      {
        property: "Weight",
        value: "0.6 kg (495-705 g).",
      },
      {
        property: "Shelf life",
        value: "5 days",
      },
      {
        property: "Breed",
        value: "Cobb 200",
      },
      {
        property: "Place of origin",
        value: "Tver region",
      },
    ],
    structure: [
      {
        property: "Energy value",
        value: "335 kcal / 765 kJ",
      },
      {
        property: "Nutritional value",
        value:
          "proteins - 13.8 g, fats - 18.7 g, carbohydrates - 0 g; per 100 g.",
      },
    ],
  },
  {
    id: 2,
    name: 'Cheese "Amst" with Fenugreek',
    description:
      "Basic semi-hard cheese. Thanks to fenugreek seeds, the cheese acquires a nutty aftertaste that perfectly complements the creamy notes. Aged for 1 month.",
    price: 400,
    weight: 300,
    image: "./img/products/cheese-amst-with-fenugreek.jpg",
    specifications: [
      {
        property: "Weight",
        value: "0.3 kg",
      },
      {
        property: "Shelf life",
        value: "30 days",
      },
      {
        property: "Fat content",
        value: "45%",
      },
      {
        property: "Storage conditions",
        value: "from 0 to 10 °C",
      },
      {
        property: "Place of origin",
        value: "Tver region",
      },
    ],
    structure: [
      {
        property: "Energy value",
        value: "323 kcal / 1407 kJ",
      },
      {
        property: "Nutritional value",
        value:
          "proteins - 25.2 g, fats - 27 g, carbohydrates - 3.6 g; per 100 g.",
      },
    ],
  },
  {
    id: 3,
    name: 'Cheese "Camembert"',
    description:
      "Soft cheese made from pasteurized cow's milk with the addition of white mold cultures.",
    price: 390,
    weight: 200,
    image: "./img/products/cheese-camembert.jpg",
    specifications: [
      {
        property: "Weight",
        value: "0.2 kg",
      },
      {
        property: "Shelf life",
        value: "30 days",
      },
      {
        property: "Fat content",
        value: "50%",
      },
      {
        property: "Storage conditions",
        value: "from 5 to 8 °C",
      },
      {
        property: "Place of origin",
        value: "Sergiev Posad",
      },
    ],
    structure: [
      {
        property: "Energy value",
        value: "303 kcal / 1407 kJ",
      },
      {
        property: "Nutritional value",
        value:
          "proteins - 25.2 g, fats - 27 g, carbohydrates - 3.6 g; per 100 g.",
      },
    ],
  },
  {
    id: 4,
    name: "May Mountain Honey",
    description:
      "Honey harvest of 2021. Unusually delicate May honey, collected in the subtropical groves of the North Caucasus reserve, reveals a whole range of citrus notes.",
    price: 590,
    weight: 200,
    image: "./img/products/may-mountain-honey.jpg",
    specifications: [
      {
        property: "Weight",
        value: "0.2 kg",
      },
      {
        property: "Shelf life",
        value: "24 months",
      },
      {
        property: "Storage conditions",
        value: "from 5 to 20 °C",
      },
    ],
    structure: [
      {
        property: "Energy value",
        value: "303 kcal / 1407 kJ",
      },
      {
        property: "Nutritional value",
        value:
          "proteins - 25.2 g, fats - 27 g, carbohydrates - 3.6 g; per 100 g.",
      },
    ],
  },
];

export default products;
