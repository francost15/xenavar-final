"use client";

import { useState, useEffect } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Flavors, Marca, Product,  } from "@/interfaces";
import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";
import { getStockBySlug } from "@/actions";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [flavor, setFlavor] = useState<Flavors | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);
  const [stock, setStock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStock = async () => {
      const inStock = await getStockBySlug(product.slug);
      setStock(inStock);
      setIsLoading(false);
    };
    fetchStock();
  }, [product.slug]);

  const addToCart = () => {
    setPosted(true);

    if (!flavor) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      flavors: flavor,
      marca: product.marca as Marca,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setFlavor(undefined);
    router.push("/cart");
  };

  if (isLoading) {
    return (
      <div className="relative flex w-64 gap-2 animate-pulse">
      <div className="flex-1">
        <div className="w-3/5 h-5 text-sm rounded-lg bg-slate-400"/>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="w-3/5 h-5 text-lg rounded-lg bg-slate-400"/>
            <div className="w-3/5 h-5 text-lg rounded-lg bg-slate-400"/>
            <div className="w-3/5 h-5 text-lg rounded-lg bg-slate-400"/>
          </div>
            <div className="w-2/5 h-5 text-lg rounded-lg mt-11 bg-slate-400"/>
            <div className="w-3/5 h-8 mt-2 text-lg rounded-lg bg-slate-400"/>
            <div className="w-3/5 h-10 mt-2 text-lg rounded-lg bg-slate-400"/>
        </div>
    </div>
    )
  }

  return (
    <>
      {posted && !flavor && (
        <span className="mt-2 text-red-500 fade-in">Debe de seleccionar una talla*</span>
      )}
      {/* Selector de Tallas */}
      <SizeSelector selectedFlavor={flavor} availableFlavors={product.flavors} onFlavorChanged={setFlavor} />

      {/* Selector de Cantidad */}
      {/* <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} /> */}

      {/* Botón */}
      {/* <button
        onClick={addToCart}
        className={`btn-primary my-5 ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button> */}
    </>
  );
};
