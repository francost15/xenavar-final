import prisma from "../lib/prisma";
import { initialData } from "./seed";
import { countries } from "./seed-countries";

async function main() {
  // 1. Eliminar registros previos en orden adecuado
  await prisma.productImage.deleteMany(); // Primero eliminamos las imágenes de los productos
  await prisma.product.deleteMany(); // Luego eliminamos los productos
  await prisma.category.deleteMany(); // Ahora se pueden eliminar las categorías
  await prisma.marca.deleteMany(); // Eliminamos las marcas
  await prisma.user.deleteMany(); // Eliminamos los usuarios
  await prisma.country.deleteMany(); // Finalmente, eliminamos los países

  // 2. Crear nuevos registros
  const { categories, products, users, marcas } = initialData;

  // Crear usuarios
  await prisma.user.createMany({
    data: users,
  });

  // Crear países
  await prisma.country.createMany({
    data: countries,
  });

  // Crear marcas
  const marcasData = marcas.map((name) => ({ name: name.toLowerCase() }));

  await prisma.marca.createMany({
    data: marcasData,
  });

  const marcasDB = await prisma.marca.findMany();

  const marcasMap = marcasDB.reduce((map, marca) => {
    map[marca.name] = marca.id;
    return map;
  }, {} as Record<string, string>);

  // Crear categorías
  const categoriesData = categories.map((name) => ({
    name: name.toLowerCase(),
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name] = category.id;
    return map;
  }, {} as Record<string, string>);

  // Crear productos
  for (const product of products) {
    const { type, images, marca, ...rest } = product;

    const categoryId = categoriesMap[type.toLowerCase()];
    const marcaId = marcasMap[marca.toLowerCase()];

    if (!categoryId || !marcaId) {
      console.error(
        `No se encontró marca o categoría para el producto: ${product.title}`
      );
      continue; // Saltar este producto si no se encuentran la marca o categoría
    }

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId,
        marcaId,
      },
    });

    // Crear imágenes
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  }

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
