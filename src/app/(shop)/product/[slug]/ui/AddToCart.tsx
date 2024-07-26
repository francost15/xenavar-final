"use client";

import { useState, useEffect } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";
import { getStockBySlug } from "@/actions";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [size, setSize] = useState<Size | undefined>();
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

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
    router.push("/cart");
  };

  if (isLoading) {
    return (
      <div className="relative flex w-64 animate-pulse gap-2">
      <div className="flex-1">
        <div className="h-5 w-3/5 rounded-lg bg-slate-400 text-sm"/>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="h-5 w-3/5 rounded-lg bg-slate-400 text-lg"/>
            <div className="h-5 w-3/5 rounded-lg bg-slate-400 text-lg"/>
            <div className="h-5 w-3/5 rounded-lg bg-slate-400 text-lg"/>
          </div>
            <div className="mt-11 h-5 w-2/5 rounded-lg bg-slate-400 text-lg"/>
            <div className="mt-2 h-8 w-3/5 rounded-lg bg-slate-400 text-lg"/>
            <div className="mt-2 h-10 w-3/5 rounded-lg bg-slate-400 text-lg"/>
        </div>
    </div>
    )
  }

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fade-in">Debe de seleccionar una talla*</span>
      )}
      {/* Selector de Tallas */}
      <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize} />

      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Botón */}
      <button
        onClick={addToCart}
        className={`btn-primary my-5 ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </>
  );
};
