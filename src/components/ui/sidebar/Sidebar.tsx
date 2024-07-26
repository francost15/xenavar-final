'use client';
import { logout } from '@/actions';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

export const Sidebar = () => {
    
    const IsSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);
    const {data:session} = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = (session?.user.role === 'admin');
    return (
    <div>
        {
            IsSideMenuOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'/>
            )
        }
        {
            IsSideMenuOpen && (
                <div 
                onClick={closeMenu}
                className='fade-in fixed top-0 left-0 h-screen w-screen z-10 backdrop-filter backdrop-blur-sm'/>
            )
        }
        <nav 
        className={
            clsx(
                'fixed p-5 right-0 top-0 w-[70%] sm:w-[50%] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ',
                {
                    'translate-x-0': IsSideMenuOpen,
                    'translate-x-full': !IsSideMenuOpen
                }
            )
        }>
        <IoCloseOutline
        size={50}
        className='absolute top-5 right-5 cursor-pointer hover:text-gray-600 hover:bg-gray-100 rounded transition-all'
        onClick={()=> closeMenu()}/>
        {/* Menu */}
     {
        isAuthenticated && (
            <>
        <Link 
        href="/profile" 
        onClick={()=> closeMenu()}
        className='flex items-center mt-20 p-2 hover:bg-gray-100 rounded transition-all'>
        <IoPersonOutline size={30}/>
        <span className='ml-3 text-xl'>Perfil</span>
        </Link>
        <Link href="/orders"
        onClick={()=> closeMenu()}
        className='flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'>
        <IoTicketOutline size={30}/>
        <span className='ml-3 text-xl'>Ordenes</span>
        </Link>
            </>
        )
     }
        {
            isAuthenticated && (
                <button
                className='flex w-full items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'
                onClick={()=>logout()}
                >
                    <IoLogOutOutline size={30}/>
                    <span className='ml-3 text-xl'>Salir</span>
                </button>
            )
        }
        {
            (
                !isAuthenticated && (
                    <Link 
                    onClick={()=> closeMenu()}
                    href="/auth/login" 
                    className='flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoLogInOutline size={30}/>
                    <span className='ml-3 text-xl'>Ingresar</span>
                    </Link>
                )
            )
        }
        {
            isAdmin && (
                <> 
        <div className='w-full h-px bg-gray-200 my-10'/>
        <Link 
        onClick={()=> closeMenu()}
        href="/admin/products" 
        className='flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'>
        <IoShirtOutline size={30}/>
        <span className='ml-3 text-xl'>Products</span>
        </Link>
        <Link 
        onClick={()=> closeMenu()}
        href="/admin/orders" 
        className='flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'>
        <IoTicketOutline size={30}/>
        <span className='ml-3 text-xl'>Todas las Ordenes</span>
        </Link>
        <Link 
        onClick={()=> closeMenu()}
        href="/admin/users" 
        className='flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all'>
        <IoPeopleOutline size={30}/>
        <span className='ml-3 text-xl'>Usuarios</span>
        </Link>
        </>
            )
        }
        </nav>
    </div>
    )
}
