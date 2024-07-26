"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export const OrderSummary = () => {

  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);


  useEffect(() => {

    if ( itemsInCart === 0 && loaded === true )   {
      router.replace('/empty')
    }


  },[ itemsInCart, loaded, router ])



  if (!loaded) return (
    <div className="relative flex w-64 animate-pulse gap-2">
  <div className="flex-1">
    <div className="h-5 w-5/5 rounded-lg bg-slate-400 text-sm"></div>
    <div className="mt-1 h-5 w-5/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="mt-1 h-5 w-5/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="mt-5 h-8 w-5/5 rounded-lg bg-slate-400 text-lg"></div>
  </div>
</div>
  );

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};