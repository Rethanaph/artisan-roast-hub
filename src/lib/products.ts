import beansEthiopian from "@/assets/beans-ethiopian.jpg";
import beansColombian from "@/assets/beans-colombian.jpg";
import beansKenyan from "@/assets/beans-kenyan.jpg";
import beansBrazilian from "@/assets/beans-brazilian.jpg";
import beansGuatemalan from "@/assets/beans-guatemalan.jpg";
import beansRwandan from "@/assets/beans-rwandan.jpg";

export interface Product {
  id: string;
  name: string;
  origin: string;
  roast: "Light" | "Medium" | "Medium-Dark" | "Dark";
  price: number;
  weight: string;
  description: string;
  flavourNotes: string[];
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "ethiopian-yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roast: "Light",
    price: 189,
    weight: "250g",
    description:
      "A bright, complex single origin with delicate floral aromatics and a clean, tea-like body. Sourced from the birthplace of coffee.",
    flavourNotes: ["Jasmine", "Bergamot", "Lemon Zest"],
    image: beansEthiopian,
    featured: true,
  },
  {
    id: "colombian-supremo",
    name: "Colombian Supremo",
    origin: "Colombia",
    roast: "Medium",
    price: 169,
    weight: "250g",
    description:
      "A well-balanced bean from the highlands of Huila. Rich, smooth, and wonderfully versatile for any brew method.",
    flavourNotes: ["Caramel", "Red Apple", "Milk Chocolate"],
    image: beansColombian,
    featured: true,
  },
  {
    id: "kenyan-aa",
    name: "Kenyan AA",
    origin: "Kenya",
    roast: "Medium",
    price: 210,
    weight: "250g",
    description:
      "One of the world's most prized coffees. Vibrant acidity with intense fruit-forward notes and a wine-like finish.",
    flavourNotes: ["Blackcurrant", "Grapefruit", "Brown Sugar"],
    image: beansKenyan,
    featured: true,
  },
  {
    id: "brazilian-santos",
    name: "Brazilian Santos",
    origin: "Brazil",
    roast: "Medium-Dark",
    price: 149,
    weight: "250g",
    description:
      "A classic, nutty Brazilian with low acidity and a creamy, full body. Perfect for espresso blends and everyday drinking.",
    flavourNotes: ["Hazelnut", "Dark Chocolate", "Toasted Almond"],
    image: beansBrazilian,
    featured: false,
  },
  {
    id: "guatemalan-antigua",
    name: "Guatemalan Antigua",
    origin: "Guatemala",
    roast: "Dark",
    price: 195,
    weight: "250g",
    description:
      "Grown in volcanic soil, this dark roast delivers a smoky richness with spicy undertones and a velvety body.",
    flavourNotes: ["Dark Cocoa", "Cinnamon", "Smoky"],
    image: beansGuatemalan,
    featured: false,
  },
  {
    id: "rwandan-bourbon",
    name: "Rwandan Bourbon",
    origin: "Rwanda",
    roast: "Light",
    price: 199,
    weight: "250g",
    description:
      "A rare African gem with brilliant acidity and a silky mouthfeel. Ethically sourced from women-led cooperatives.",
    flavourNotes: ["Peach", "Honey", "Vanilla"],
    image: beansRwandan,
    featured: false,
  },
];

export function formatPrice(price: number): string {
  return `R${price.toFixed(2)}`;
}
