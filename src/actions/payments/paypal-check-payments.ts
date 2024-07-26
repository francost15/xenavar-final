"use server";

import { PayPalOrderStatusResponse } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const paypalCheckPayment = async (paypalTransactionId: string) => {
  const authToken = await getPaypalBearerToken();
  if (!authToken) {
    return {
      ok: false,
      message: "No se pudo obtener el token de autorización de PayPal",
    };
  }
  const resp = await verifyPaypalTransaction(paypalTransactionId, authToken);
  if (!resp) {
    return {
      ok: false,
      message: "Error al verificar la transacción de PayPal",
    };
  }
  const { status, purchase_units } = resp;
  const { invoice_id: orderId } = purchase_units[0];
  if (status !== "COMPLETED") {
    return {
      ok: false,
      message: "La transacción no fue completada",
    };
  }
  // Todo realizar la actualizacion en nuestra base de datos
  try {
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        isPaid: true,
        paidAt: new Date(),
      },
    });
    // Todo: Revalidar un path
    revalidatePath(`/orders/${orderId}`);
    return {
      ok: true,
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      message: "500 - El pago no se pudo realizar",
    };
  }
  // const {amount} = purchase_units[0];
  console.log({ status, purchase_units });
};
const getPaypalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
  const oauth2Url = process.env.PAYPAL_OAUTH_URL ?? "";
  const base64token = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`,
    "utf-8"
  ).toString("base64");
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", `application/x-www-form-urlencoded`);
  myHeaders.append("Authorization", `Basic ${base64token}`);
  const urlendcoded = new URLSearchParams();
  urlendcoded.append("grant_type", "client_credentials");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlendcoded,
  };
  try {
    const result = await fetch(oauth2Url, {
      ...requestOptions,
      cache: "no-store",
    }).then((response) => response.json());
    return result.access_token;
  } catch (e) {
    console.log(e);
    return null;
  }
};
const verifyPaypalTransaction = async (
  paypalTransaccionId: string,
  bearerToken: string
): Promise<PayPalOrderStatusResponse | null> => {
  const paypalOrderUrl = `${process.env.PAYPAL_ORDERS_URL}/${paypalTransaccionId}`;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  try {
    const result = await fetch(paypalOrderUrl, {
      ...requestOptions,
      cache: "no-store",
    }).then((response) => response.json());
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
};
