'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';



export const ProductsInCart = () => {

  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );


  useEffect(() => {
    setLoaded(true) ;
  }, []);




  if( !loaded ) {
    return (
      <div className="relative flex w-64 animate-pulse gap-2">
      <div className="h-20 w-20 rounded-md bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-5 w-full rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 w-full rounded-lg bg-slate-400 text-sm"></div>
        <div className="mt-1 h-5 w-2/5 rounded-lg bg-slate-400 text-sm"></div>
      </div>
    </div>
    )
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={ `${ product.slug }-${ product.flavors }`  } className="flex mb-5">
          <Image
            src={`/products/${product.image }`}
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
            <span>
              { product.flavors } - {product.title} (x{ product.quantity })
            </span>
            
            <p className='font-bold'>{currencyFormat(product.price * product.quantity)}</p>
          </div>
        </div>
      ))}
    </>
  );
};