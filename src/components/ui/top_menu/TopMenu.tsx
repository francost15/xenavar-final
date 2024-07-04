'use client'
import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoIosMenu } from "react-icons/io"
import {IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () => {
    const OpenSideMenu = useUIStore(state=>state.OpenSideMenu)
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
        <div>
            <Link
            href="/">
                <span className={`${titleFont.className} text-blue-700 antialiased font-bold`}>
                    Wimx  
                </span> 
                <span className=""> | Telecom</span> 
            </Link>
        </div>
        <div className="hidden sm:block">
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kid">Niños</Link>
        </div>
        <div className="flex items-center">
            <Link href="/search" className="mx-2">
                <IoSearchOutline className="w-5 h-5"/>
            </Link>
            <Link href="/cart" className="mx-2">
                <div className="relative">
                    <span className="absolute px-1 text-xs rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                        3
                    </span>
                <IoCartOutline className="w-5 h-5"/>
                </div>
            </Link>
            <button
            title="menu"
            onClick={()=> OpenSideMenu()}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-200">
                <IoIosMenu className="w-6 h-6"/>
                
            </button>
        </div>
    </nav>
  )
}
