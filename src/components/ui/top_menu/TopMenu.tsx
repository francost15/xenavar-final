"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline, IoMenu } from "react-icons/io5";

import { useCartStore, useUIDropStore, useUIStore } from "@/store";
import Image from 'next/image';
import { DropdownCategory, DropdownGender, DropdownMarcas } from '@/components';

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);


  return (
    <nav className="flex items-center justify-between w-full px-5">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={'/imgs/xenavar.png'} alt={'logo'} width={130} height={100}/>
        </Link>
      </div>
      {/* DropdownGender */}
     <DropdownGender />
     <Link href={"/allproducts"}
        className="hidden p-2 transition-all rounded-md hover:bg-gray-100 sm:block"
      >
        Todos los productos
      </Link>
      {/* DropdownCategory */}
      <DropdownCategory />
      <DropdownMarcas/>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {/* <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link> */}

        {/* <Link href={
          ( (totalItemsInCart === 0) && loaded )
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {  ( loaded && totalItemsInCart > 0) && (
              <span className="absolute px-1 text-xs font-bold text-white bg-blue-700 rounded-full -top-2 -right-2">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link> */}

        <button
          title='menu'
          onClick={openSideMenu}
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
        >
          <IoMenu className='w-5 h-5' />
        </button>
      </div>
    </nav>
  );
};