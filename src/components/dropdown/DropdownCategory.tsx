import { useUIDropStoreCategory } from '@/store';
import Link from 'next/link';
import React from 'react';

export const DropdownCategory = () => {
  const isDropdownOpen = useUIDropStoreCategory((state) => state.isDropDownOpenC);
  const toggleDropdown = useUIDropStoreCategory((state) => state.toggleDropDownC);
  const openDropdown = () => !isDropdownOpen && toggleDropdown();
  const closeDropdown = () => isDropdownOpen && toggleDropdown();

  return (
    <div 
      className="relative z-20 hidden sm:block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className="p-2 m-2 transition-all rounded-md hover:text-red-700 hover:bg-gray-100"
      >
        Categorías
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 w-40 transition-all bg-gray-100 rounded-md shadow-md top-10">
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
            href="/category/proteinas"
          >
            Proteínas
          </Link>
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
            href="/category/creatinas"
          >
            Creatinas
          </Link>
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
            href="/category/preentrenos"
          >
            Preworkouts
          </Link>
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
            href="/category/vitaminas"
          >
            Multivitamínicos
          </Link>
            <Link
                className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
                href="/category/Aminoacidos"
            >
                Bcaas
            </Link>
            <Link
                className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-300"
                href="/category/Snacks"
            >
                Snacks
            </Link>
        </div>
      )}
    </div>
  );
};