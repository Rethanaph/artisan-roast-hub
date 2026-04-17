import drinkEspresso from "@/assets/drink-espresso.jpg";
import drinkAmericano from "@/assets/drink-americano.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";
import drinkFlatWhite from "@/assets/drink-flat-white.jpg";
import drinkMocha from "@/assets/drink-mocha.jpg";
import drinkMacchiato from "@/assets/drink-macchiato.jpg";
import drinkIcedCoffee from "@/assets/drink-iced-coffee.jpg";

export type DrinkCategory = "Espresso-Based" | "Milk-Based" | "Cold Brew";

export interface Drink {
  id: string;
  name: string;
  category: DrinkCategory;
  size: string;
  price: number;
  description: string;
  image: string;
}

export const drinks: Drink[] = [
  {
    id: "espresso",
    name: "Espresso",
    category: "Espresso-Based",
    size: "30ml",
    price: 32,
    description:
      "A bold, concentrated shot pulled from our signature house blend. Rich crema, balanced sweetness.",
    image: drinkEspresso,
  },
  {
    id: "americano",
    name: "Americano",
    category: "Espresso-Based",
    size: "240ml",
    price: 38,
    description:
      "Double shot of espresso lengthened with hot water. Smooth, clean, and full-bodied.",
    image: drinkAmericano,
  },
  {
    id: "macchiato",
    name: "Macchiato",
    category: "Espresso-Based",
    size: "60ml",
    price: 36,
    description:
      "Espresso 'marked' with a dollop of velvety steamed milk foam. Intense and elegant.",
    image: drinkMacchiato,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "Milk-Based",
    size: "180ml",
    price: 45,
    description:
      "Equal parts espresso, steamed milk and silky microfoam. Topped with hand-poured latte art.",
    image: drinkCappuccino,
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "Milk-Based",
    size: "180ml",
    price: 48,
    description:
      "A double ristretto with velvety steamed milk. Stronger coffee flavour than a latte.",
    image: drinkFlatWhite,
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    category: "Milk-Based",
    size: "300ml",
    price: 52,
    description:
      "Smooth espresso with generously steamed milk and a thin foam crown. Comforting and creamy.",
    image: drinkLatte,
  },
  {
    id: "mocha",
    name: "Mocha",
    category: "Milk-Based",
    size: "300ml",
    price: 58,
    description:
      "Espresso, dark Belgian chocolate and steamed milk, finished with whipped cream and cocoa.",
    image: drinkMocha,
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    category: "Cold Brew",
    size: "400ml",
    price: 55,
    description:
      "Double espresso poured over ice with cold milk. Refreshing on a hot Cape Town day.",
    image: drinkIcedCoffee,
  },
];
