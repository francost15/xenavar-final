import bcryptjs from "bcryptjs";
interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  flavors: ValidFlavors[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  marca: ValidMarcas;
}
interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

type ValidFlavors =
  | "Chocolate"
  | "Fresa"
  | "Vainilla"
  | "StrawBerry"
  | "Mango"
  | "Mazapan"
  | "Coco"
  | "BlueBerry"
  | "Churro"
  | "Other";
type ValidTypes =
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
  | "snacks"
  | "other";
type ValidMarcas =
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
  | "universalNutrition"
  | "other";

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
  marcas: string[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "xenavar15@gmail.com",
      name: "Ricardo Navar",
      password: bcryptjs.hashSync("xenavar15"),
      role: "admin",
    },
  ],
  categories: [
    "pants",
    "hoodies",
    "hats",
    "shirts",
    "proteinas",
    "suplementos",
    "vitaminas",
    "minerales",
    "creatinas",
    "aminoacidos",
    "energeticos",
    "quemadores",
    "ganadores",
    "preentrenos",
    "postentrenos",
    "barras",
    "snacks",
    "other",
  ],
  marcas: [
    "mutant",
    "43Suplements",
    "birdman",
    "bhpNutrtion",
    "bpiSports",
    "bSN",
    "dragonPharma",
    "dymatize",
    "engyNutrition",
    "gat",
    "ghost",
    "insaneLabz",
    "krakenLabz",
    "metaNutrition",
    "muscleMeds",
    "musclePharm",
    "muscleTech",
    "nextEvolution",
    "nutrex",
    "optimunNutrition",
    "proSupps",
    "raw",
    "rc",
    "ryse",
    "universalNutrition",
    "other",
  ],
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740176-00-A_0_2000.jpg", "1740176-00-A_1.jpg"],
      inStock: 7,
      price: 75,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      marca: "43Suplements",
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ["1740507-00-A_0_2000.jpg", "1740507-00-A_1.jpg"],
      inStock: 5,
      price: 200,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_quilted_shirt_jacket",
      type: "proteinas",
      tags: ["jacket"],
      title: "Men's Quilted Shirt Jacket",
      marca: "mutant",
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ["1740250-00-A_0_2000.jpg", "1740250-00-A_1.jpg"],
      inStock: 10,
      price: 130,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: "proteinas",
      tags: ["shirt"],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      marca: "mutant",
    },

    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ["1740280-00-A_0_2000.jpg", "1740280-00-A_1.jpg"],
      inStock: 50,
      price: 45,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_turbine_long_sleeve_tee",
      type: "proteinas",
      tags: ["shirt"],
      title: "Men's Turbine Long Sleeve Tee",
      marca: "43Suplements",
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ["1741416-00-A_0_2000.jpg", "1741416-00-A_1.jpg"],
      inStock: 50,
      price: 40,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_turbine_short_sleeve_tee",
      type: "creatinas",
      tags: ["shirt"],
      title: "Men's Turbine Short Sleeve Tee",
      marca: "bhpNutrtion",
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: ["7654393-00-A_2_2000.jpg", "7654393-00-A_3.jpg"],
      inStock: 0,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_cybertruck_owl_tee",
      type: "creatinas",
      tags: ["shirt"],
      title: "Men's Cybertruck Owl Tee",
      marca: "bhpNutrtion",
    },
    {
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
      inStock: 15,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_solar_roof_tee",
      type: "creatinas",
      tags: ["shirt"],
      title: "Men's Solar Roof Tee",
      marca: "dragonPharma",
    },
    {
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ["1700280-00-A_0_2000.jpg", "1700280-00-A_1.jpg"],
      inStock: 17,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_let_the_sun_shine_tee",
      type: "creatinas",
      tags: ["shirt"],
      title: "Men's Let the Sun Shine Tee",
      marca: "gat",
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      images: ["8764734-00-A_0_2000.jpg", "8764734-00-A_1.jpg"],
      inStock: 12,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_3d_large_wordmark_tee",
      type: "vitaminas",
      tags: ["shirt"],
      title: "Men's 3D Large Wordmark Tee",
      marca: "ghost",
    },
    {
      description:
        "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
      images: ["7652426-00-A_0_2000.jpg", "7652426-00-A_1.jpg"],
      inStock: 5,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_3d_t_logo_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's 3D T Logo Tee",
      marca: "insaneLabz",
    },
    {
      description:
        "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
      images: ["8528839-00-A_0_2000.jpg", "8528839-00-A_2.jpg"],
      inStock: 2,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_3d_small_wordmark_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men’s 3D Small Wordmark Tee",
      marca: "krakenLabz",
    },
    {
      description:
        "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: ["1549268-00-A_0_2000.jpg", "1549268-00-A_2.jpg"],
      inStock: 82,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_plaid_mode_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Plaid Mode Tee",
      marca: "metaNutrition",
    },
    {
      description:
        "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
      images: ["9877034-00-A_0_2000.jpg", "9877034-00-A_2.jpg"],
      inStock: 24,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_powerwall_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Powerwall Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
      images: ["1633802-00-A_0_2000.jpg", "1633802-00-A_2.jpg"],
      inStock: 5,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_battery_day_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Battery Day Tee",
      marca: "musclePharm",
    },
    {
      description:
        "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: ["7654399-00-A_0_2000.jpg", "7654399-00-A_1.jpg"],
      inStock: 150,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_cybertruck_bulletproof_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men’s Cybertruck Bulletproof Tee",
      marca: "muscleTech",
    },
    {
      description:
        "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
      images: ["7652410-00-A_0.jpg", "7652410-00-A_1_2000.jpg"],
      inStock: 10,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_haha_yes_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Haha Yes Tee",
      marca: "nextEvolution",
    },
    {
      description:
        "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
      images: ["8764600-00-A_0_2000.jpg", "8764600-00-A_2.jpg"],
      inStock: 34,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_s3xy_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's S3XY Tee",
      marca: "nutrex",
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
      images: ["8764813-00-A_0_2000.jpg", "8764813-00-A_1.jpg"],
      inStock: 15,
      price: 40,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_3d_wordmark_long_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's 3D Wordmark Long Sleeve Tee",
      marca: "optimunNutrition",
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
      images: ["8529198-00-A_0_2000.jpg", "8529198-00-A_1.jpg"],
      inStock: 12,
      price: 40,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_3d_t_logo_long_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's 3D T Logo Long Sleeve Tee",
      marca: "proSupps",
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
      images: ["1740245-00-A_0_2000.jpg", "1740245-00-A_1.jpg"],
      inStock: 10,
      price: 115,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_raven_lightweight_hoodie",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Men's Raven Lightweight Hoodie",
      marca: "raw",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740051-00-A_0_2000.jpg", "1740051-00-A_1.jpg"],
      inStock: 10,
      price: 130,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "chill_pullover_hoodie",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Chill Pullover Hoodie",
      marca: "rc",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: ["1741111-00-A_0_2000.jpg", "1741111-00-A_1.jpg"],
      inStock: 100,
      price: 85,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_chill_full_zip_hoodie",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Chill Full Zip Hoodie",
      marca: "ryse",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740140-00-A_0_2000.jpg", "1740140-00-A_1.jpg"],
      inStock: 7,
      price: 85,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_chill_quarter_zip_pullover_-_gray",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Chill Quarter Zip Pullover - Gray",
      marca: "universalNutrition",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740145-00-A_2_2000.jpg", "1740145-00-A_1.jpg"],
      inStock: 15,
      price: 85,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "men_chill_quarter_zip_pullover_-_white",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Chill Quarter Zip Pullover - White",
      marca: "raw",
    },
    {
      description:
        "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
      images: ["8529107-00-A_0_2000.jpg", "8529107-00-A_1.jpg"],
      inStock: 15,
      price: 70,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "3d_large_wordmark_pullover_hoodie",
      type: "hoodies",
      tags: ["hoodie"],
      title: "3D Large Wordmark Pullover Hoodie",
      marca: "ryse",
    },
    {
      description:
        "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
      images: ["7654420-00-A_0_2000.jpg", "7654420-00-A_1_2000.jpg"],
      inStock: 13,
      price: 60,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "cybertruck_graffiti_hoodie",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Cybertruck Graffiti Hoodie",
      marca: "universalNutrition",
    },
    {
      description:
        "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
      images: ["1657932-00-A_0_2000.jpg", "1657932-00-A_1.jpg"],
      inStock: 11,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "relaxed_t_logo_hat",
      type: "hats",
      tags: ["hats"],
      title: "Relaxed T Logo Hat",
      marca: "muscleMeds",
    },
    {
      description:
        "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
      images: ["1740417-00-A_0_2000.jpg", "1740417-00-A_1.jpg"],
      inStock: 13,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "thermal_cuffed_beanie",
      type: "hats",
      tags: ["hats"],
      title: "Thermal Cuffed Beanie",
      marca: "birdman",
    },
    {
      description:
        "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
      images: ["1740535-00-A_0_2000.jpg", "1740535-00-A_1.jpg"],
      inStock: 85,
      price: 225,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_cropped_puffer_jacket",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Women's Cropped Puffer Jacket",
      marca: "birdman",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740226-00-A_0_2000.jpg", "1740226-00-A_1.jpg"],
      inStock: 10,
      price: 130,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_chill_half_zip_cropped_hoodie",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Women's Chill Half Zip Cropped Hoodie",
      marca: "birdman",
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      images: ["1740260-00-A_0_2000.jpg", "1740260-00-A_1.jpg"],
      inStock: 9,
      price: 110,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_raven_slouchy_crew_sweatshirt",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Women's Raven Slouchy Crew Sweatshirt",
      marca: "birdman",
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
      images: ["1740290-00-A_0_2000.jpg", "1740290-00-A_1.jpg"],
      inStock: 10,
      price: 45,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_turbine_cropped_long_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Turbine Cropped Long Sleeve Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
      images: ["1741441-00-A_0_2000.jpg", "1741441-00-A_1.jpg"],
      inStock: 0,
      price: 40,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_turbine_cropped_short_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Turbine Cropped Short Sleeve Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: ["8765090-00-A_0_2000.jpg", "8765090-00-A_1.jpg"],
      inStock: 30,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_t_logo_short_sleeve_scoop_neck_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's T Logo Short Sleeve Scoop Neck Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: ["8765100-00-A_0_2000.jpg", "8765100-00-A_1.jpg"],
      inStock: 16,
      price: 40,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_t_logo_long_sleeve_scoop_neck_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's T Logo Long Sleeve Scoop Neck Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
      images: ["8765120-00-A_0_2000.jpg", "8765120-00-A_1.jpg"],
      inStock: 18,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_small_wordmark_short_sleeve_v-neck_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
      images: ["8765115-00-A_0_2000.jpg", "8765115-00-A_1.jpg"],
      inStock: 5,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: ["1549275-00-A_0_2000.jpg", "1549275-00-A_1.jpg"],
      inStock: 16,
      price: 35,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_plaid_mode_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Plaid Mode Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
      images: ["9877040-00-A_0_2000.jpg", "9877040-00-A_1.jpg"],
      inStock: 10,
      price: 130,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_powerwall_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women’s Powerwall Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
      images: ["5645680-00-A_0_2000.jpg", "5645680-00-A_3.jpg"],
      inStock: 3,
      price: 90,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_corp_jacket",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Corp Jacket",
      marca: "muscleMeds",
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      images: ["1740270-00-A_0_2000.jpg", "1740270-00-A_1.jpg"],
      inStock: 162,
      price: 100,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "women_raven_joggers",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Raven Joggers",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
      images: ["1742694-00-A_1_2000.jpg", "1742694-00-A_3.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_cybertruck_long_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Cybertruck Long Sleeve Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
      images: ["8529312-00-A_0_2000.jpg", "8529312-00-A_1.jpg"],
      inStock: 0,
      price: 25,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_scribble_t_logo_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Scribble T Logo Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
      images: ["8529342-00-A_0_2000.jpg", "8529342-00-A_1.jpg"],
      inStock: 10,
      price: 25,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_cybertruck_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Cybertruck Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      images: ["8529354-00-A_0_2000.jpg", "8529354-00-A_1.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_racing_stripe_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Racing Stripe Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
      images: ["7652465-00-A_0_2000.jpg", "7652465-00-A_1.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_3d_t_logo_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids 3D T Logo Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
      images: ["100042307_0_2000.jpg", "100042307_alt_2000.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_checkered_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Checkered Tee",
      marca: "muscleMeds",
    },
    {
      description:
        "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
      images: ["1473809-00-A_1_2000.jpg", "1473809-00-A_alt.jpg"],
      inStock: 16,
      price: 25,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "made_on_earth_by_humans_onesie",
      type: "shirts",
      tags: ["shirt"],
      title: "Made on Earth by Humans Onesie",
      marca: "muscleMeds",
    },
    {
      description:
        "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
      images: ["8529387-00-A_0_2000.jpg", "8529387-00-A_1.jpg"],
      inStock: 0,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "scribble_t_logo_onesie",
      type: "shirts",
      tags: ["shirt"],
      title: "Scribble T Logo Onesie",
      marca: "muscleMeds",
    },
    {
      description:
        "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
      images: ["1473834-00-A_2_2000.jpg", "1473829-00-A_2_2000.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "zero_emissions_(almost)_onesie",
      type: "shirts",
      tags: ["shirt"],
      title: "Zero Emissions (Almost) Onesie",
      marca: "muscleMeds",
    },
    {
      description:
        "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
      images: ["1742702-00-A_0_2000.jpg", "1742702-00-A_1.jpg"],
      inStock: 10,
      price: 65,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_cyberquad_bomber_jacket",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Cyberquad Bomber Jacket",
      marca: "muscleMeds",
    },
    {
      description:
        "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
      images: ["1506211-00-A_0_2000.jpg", "1506211-00-A_1_2000.jpg"],
      inStock: 10,
      price: 30,
      flavors: ["Chocolate", "Fresa", "Vainilla", "StrawBerry", "Mango"],
      slug: "kids_corp_jacket",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Corp Jacket",
      marca: "muscleMeds",
    },
  ],
};
