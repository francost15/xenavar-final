// 'use client';

// import { placeOrder } from "@/actions";
// import { useAddressStore, useCartStore } from "@/store";
// import { currencyFormat } from "@/utils";
// import clsx from "clsx";
// import { redirect, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export const PlaceOrder = () => {
//   const router = useRouter();
//   const [loaded, setLoaded] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [isPlacingOrder, setIsPlacingOrder] = useState(false);
//   const address = useAddressStore((state) => state.address);
//   const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());
//   const cart = useCartStore((state) => state.cart);
//   const clearCart = useCartStore((state) => state.clearCart);

//   useEffect(() => {
//     setLoaded(true);
//     if (!isPlacingOrder && itemsInCart === 0) {
//       router.replace('/cart');
//     }
//   }, [itemsInCart, router, isPlacingOrder]);

//   const onPlaceOrder = async () => {
//     if (itemsInCart === 0) {
//       router.replace('/cart');
//       return;
//     }
//     setIsPlacingOrder(true);
//     const productsToOrder = cart.map(product => ({
//       productId: product.id,
//       quantity: product.quantity,
//       flavors: product.flavors
//     }));
//     const resp = await placeOrder(productsToOrder, address);
//     if (!resp.ok) {
//       setIsPlacingOrder(false);
//       setErrorMessage(resp.message);
//       return;
//     }
//     // Todo salió bien!
//     clearCart();
//     router.replace('/orders/' + resp.order!.id);
//   }

//   if (!loaded) return (
//     <div className="relative flex w-64 animate-pulse gap-2">
//       <div className="flex-1">
//         <div className="h-[250%] w-[117%] rounded-lg bg-slate-400 "></div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-white rounded-xl shadow-xl p-7">
//       <h2 className="text-2xl mb-2">Dirección de entrega</h2>
//       <div className="mb-10">
//         <p className="text-xl">{address.firstName} {address.lastName} </p>
//         <p>{address.address}</p>
//         <p>{address.address2} </p>
//         <p>{address.postalCode} </p>
//         <p>{address.city} </p>
//         <p>{address.postalCode} </p>
//         <p>{address.phone}</p>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

//       <h2 className="text-2xl mb-2">Resumen de orden</h2>
//       <div className="grid grid-cols-2">
//         <span>No. Productos</span>
//         <span className="text-right">
//           {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
//         </span>

//         <span>Subtotal</span>
//         <span className="text-right">{currencyFormat(subTotal)} </span>

//         <span>Impuestos (15%)</span>
//         <span className="text-right">{currencyFormat(tax)}</span>

//         <span className="mt-5 text-2xl">Total:</span>
//         <span className="mt-5 text-2xl text-right">{currencyFormat(total)} </span>
//       </div>

//       <div className="mt-5 mb-2 w-full">
//         <p className="mb-5">
//           {/* Disclaimer */}
//           <span className="text-xs">
//             Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
//           </span>
//         </p>
//         <p className="text-red-500">{errorMessage}</p>
//         <button
//           onClick={onPlaceOrder}
//           className={clsx({
//             'btn-primary': !isPlacingOrder,
//             'btn-disabled': isPlacingOrder
//           })}
//         >
//           Colocar orden
//         </button>
//       </div>
//     </div>
//   )
// }
