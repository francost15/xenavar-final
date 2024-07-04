import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // borrar registro previo
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);
  const { categories, products } = initialData;
  // segundo
  // {
  //   name: 'Shirt'
  // }
  const categoriesData = categories.map((name) => ({ name }));
  await prisma.category.createMany({
    data: categoriesData,
  });
  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);
  console.log(categoriesMap);
  // Productos
  const { images, type, ...product1 } = products[0];
  await prisma.product.create({
    data: {
      ...product1,
      categoryId: categoriesMap["shirts"],
    },
  });
}
(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
