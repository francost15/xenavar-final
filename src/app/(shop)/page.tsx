export const revalidate = 60; // 60 segundos
import { Carousel, ProductTable } from '@/components';
import Image from 'next/image';
import Link from 'next/link';


export default async function Home() {
  return (
    <>
    <Carousel />
  <div>
    <ProductTable />
    <div className='p-2 mt-6 font-semibold text-white rounded-md bg-gradient-to-r from-red-900 to-red-500'>
      Encuentra los mejores productos solamente en Xenavar Suplements
      <Link href="/allproducts" className='ml-2'>
            <span className='font-bold text-yellow-400 hover:text-yellow-500'>Ver productos -&gt; </span>
      </Link>
    </div>
  </div>
    <div className="flex justify-center px-4 mx-auto mt-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-4xl lg:flex-row">
          <div className="flex flex-col items-center w-full mt-10 space-y-4 lg:w-1/2 lg:mt-0 ">
            <Image src="/imgs/imagen1.jpg" alt="imagen promo" width={300} height={400} className="rounded-lg" />
          </div>
          <div className="flex flex-col items-center w-full mt-2 space-y-4 lg:w-1/2">
            <h1 className="text-2xl font-bold text-center">Encuentra todos los productos que necesites</h1>
            <h2 className="font-sans text-xl text-center lg:text-xl">
            <strong>No encuentras lo que buscas? </strong>No dudes en contactarnos. y te ayudaremos a encontrarlos.
            </h2>
            <div className="mt-2"/>
              <Link href="https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20tengo%20una%20consulta" target="_blank" rel="noopener noreferrer">
              <button className="relative p-5 overflow-hidden font-bold text-white bg-red-700 rounded-lg text-md animate__animated animate__heartBeat group">
                Escribenos
              </button>
              </Link>
          </div>
        </div>
      </div>
    </>
);
}