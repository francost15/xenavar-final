'use client';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store';
import { ProductImage, QuantitySelector } from '@/components';
import Link from 'next/link';



export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const removeProduct = useCartStore( state => state.removeProduct );

  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );


  useEffect(() => {
    setLoaded(true) ;
  },[]);




  if( !loaded ) {
    return (
<div className="relative flex w-64 animate-pulse gap-2">
  <div className="h-24 w-24 rounded-md bg-slate-400"></div>
  <div className="flex-1">
    <div className="mb-1 h-5 w-5/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="h-5 w-[70%] rounded-lg bg-slate-400 text-sm"></div>
    <div className="mt-2 mb-1 h-5 w-1/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="mt-2 mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="mt-3 mb-1 h-8 w-5/5 rounded-lg bg-slate-400 text-lg"></div>
    <div className="mt-3 mb-1 h-5 w-2/5 rounded-lg bg-slate-400 text-lg"></div>

  </div>
</div>
    ) 
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={ `${ product.slug }-${ product.size }`  } className="flex mb-5">
          <ProductImage
            src={product.image}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link 
              className="hover:underline cursor-pointer"
              href={ `/product/${ product.slug } ` }>
              { product.size } - {product.title}
            </Link>
            
            <p>${product.price}</p>
            <QuantitySelector 
              quantity={ product.quantity } 
              onQuantityChanged={ quantity => updateProductQuantity(product, quantity) }
            />

            <button 
              onClick={ () => removeProduct(product) }
              className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};