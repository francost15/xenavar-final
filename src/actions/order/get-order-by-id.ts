"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getOrderById = async (id: string) => {
  const session = await auth();

  // Verificar sesión de usuario
  if (!session?.user) {
    return {
      ok: false,
      message: "No hay sesión de usuario",
    };
  }
  try {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            flavor: true,
            product: {
              select: {
                title: true,
                slug: true,
                ProductImage: {
                  select: {
                    url: true,
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });
    if (!order) throw new Error("${id} no existe");
    if (session.user.role === "user") {
      if (session.user.id !== order.userId) {
        throw "No tienes permisos para ver esta orden";
      }
    }
    return {
      ok: true,
      order: order,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo obtener la orden",
    };
  }
};
