"use server";
import prisma from "@/lib/prisma";

interface PaginationOptions1 {
  page?: number;
  take?: number;
  marcaId?: string;
}

export const getMarcaIdByName = async (
  marcaName: string
): Promise<string | null> => {
  const marca = await prisma.marca.findFirst({
    where: { name: marcaName },
    select: { id: true },
  });
  return marca ? marca.id : null;
};

export const getPaginatedProductsByMarca = async ({
  page = 1,
  take = 12,
  marcaId,
}: PaginationOptions1) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        marcaId: marcaId,
      },
    });
    console.log(products);
    const totalCount = await prisma.product.count({
      where: {
        marcaId: marcaId,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
