"use client"
import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react";
interface Props{
    slug: string;
}
export const StockLabel = ({slug}:Props) => {
    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      const getStock = async() => {
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setIsLoading(false);
      }
      getStock();
    }, [slug])
    
    return (
      <>
        {isLoading ? (
          <h1
            className={`${titleFont.className} antialiased font-bold text-xl bg-gray-200 animate-pulse`}
          >
            &nbsp;
          </h1>
        ) : stock === 0 ? (
          <h1 className={`${titleFont.className} bg-blue-400 text-white  antialiased font-bold text-xl text-center rounded-lg`}>
            Sin disponibilidad
          </h1>
        ) : (
          <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
            Disponible
          </h1>
        )}
      </>
    );
  };