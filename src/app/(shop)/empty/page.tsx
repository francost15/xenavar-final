import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío 
        </h1>
        <IoCartOutline size={ 90 } />
        <Link 
          href='/'
          className="text-blue-500 text-2xl"
        >
          Regresar
        </Link>

        {/* Productos recomendados */}
        <div className="flex flex-col items-center mt-5">
          <p className="text-md text-gray-500">
            ¡Descubre los productos más vendidos!
          </p>
          <div className="grid grid-cols-2 animate-pulse sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
            <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
            <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
            <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
            <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
          </div>
        </div>

      </div>

      
    </div>
  );
}