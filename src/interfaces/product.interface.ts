export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[]; // Aunque no está en el esquema actual, puede ser útil para la interfaz
  inStock: number;
  price: number;
  flavors: Flavors[];
  slug: string;
  tags: string[];
  marca?: Marca; // Asegúrate de incluir esta propiedad
  categoryId: string; // Aunque no es necesario para la interfaz Product, es útil para otras consultas
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  flavors: Flavors; // Asegúrate de que 'flavors' es singular si es un único sabor
  marca: Marca;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}

export type Flavors =
  | "Chocolate"
  | "Fresa"
  | "Vainilla"
  | "StrawBerry"
  | "Mango"
  | "Mazapan"
  | "Coco"
  | "BlueBerry"
  | "Churro";

export type Type =
  | "shirts"
  | "pants"
  | "hoodies"
  | "hats"
  | "proteinas"
  | "suplementos"
  | "vitaminas"
  | "minerales"
  | "creatinas"
  | "aminoacidos"
  | "energeticos"
  | "quemadores"
  | "ganadores"
  | "preentrenos"
  | "postentrenos"
  | "barras"
  | "snacks";

export type Marca =
  | "mutant"
  | "43Suplements"
  | "birdman"
  | "bhpNutrtion"
  | "bpiSports"
  | "bSN"
  | "dragonPharma"
  | "dymatize"
  | "engyNutrition"
  | "gat"
  | "ghost"
  | "insaneLabz"
  | "krakenLabz"
  | "metaNutrition"
  | "muscleMeds"
  | "musclePharm"
  | "muscleTech"
  | "nextEvolution"
  | "nutrex"
  | "optimunNutrition"
  | "proSupps"
  | "raw"
  | "rc"
  | "ryse"
  | "universalNutrition";
