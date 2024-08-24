"use server";

import prisma from "@/lib/prisma";

export const getMarcas = async () => {
  try {
    const marcas = await prisma.marca.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return marcas;
  } catch (error) {
    return [];
  }
};
