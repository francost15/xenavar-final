"use client";
import { useUIDropStoreMarcas } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getMarcas } from '@/actions'; // Asegúrate de tener esta función para obtener las marcas

export const DropdownMarcas = () => {
  const isDropdownOpen = useUIDropStoreMarcas((state) => state.isDropDownOpenMarcas);
  const toggleDropdown = useUIDropStoreMarcas((state) => state.toggleDropDownMarcas);
  const openDropdown = () => !isDropdownOpen && toggleDropdown();
  const closeDropdown = () => isDropdownOpen && toggleDropdown();

  const [marcas, setMarcas] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchMarcas = async () => {
      const marcasList = await getMarcas(); // Supón que esta función devuelve un array de objetos con id y name
      setMarcas(marcasList);
    };

    fetchMarcas();
  }, []);

  return (
    <div 
      className="relative z-20 hidden sm:block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className="p-2 m-2 transition-all rounded-md hover:text-red-700 hover:bg-gray-100"
      >
        Marcas
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 w-60 max-h-80 overflow-y-auto transition-all bg-white rounded-md shadow-lg top-12">
          <div className="p-2">
            {marcas.length === 0 ? (
              <div className="p-4 text-gray-500">Cargando marcas...</div>
            ) : (
              marcas.map((marca) => (
                <Link
                  key={marca.id} // Se utiliza el ID como clave
                  className="block p-2 transition-all rounded-md hover:bg-gray-200"
                  href={`/marca/${marca.name}`} // Se asegura que el valor sea una cadena
                >
                  {marca.name}
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
