"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (productId: string) => {
  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      // Delete associated product images
      await tx.productImage.deleteMany({
        where: { productId },
      });

      // Delete the product
      const product = await tx.product.delete({
        where: { id: productId },
      });

      return { product };
    });

    // Revalidate paths
    revalidatePath("/admin/products");
    return {
      ok: true,
      product: prismaTx.product,
    };
  } catch (error) {
    console.error("Error deleting product:", error);
    return {
      ok: false,
      message: "Revisar los logs, no se pudo eliminar",
    };
  }
};
