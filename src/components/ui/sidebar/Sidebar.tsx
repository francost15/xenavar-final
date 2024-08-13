"use client";
import { logout } from '@/actions';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import { getMarcas } from '@/actions'; // Asegúrate de tener esta función para obtener las marcas

export const Sidebar = () => {
    const IsSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);
    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = (session?.user.role === 'admin');

    const [marcas, setMarcas] = useState<{ id: string; name: string }[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchMarcas = async () => {
            const marcasList = await getMarcas();
            setMarcas(marcasList);
        };

        fetchMarcas();
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div>
            {IsSideMenuOpen && (
                <div className='fixed top-0 left-0 z-10 w-screen h-full transition-all bg-black opacity-40' />
            )}
            {IsSideMenuOpen && (
                <div
                    onClick={closeMenu}
                    className='fixed top-0 left-0 z-10 w-screen h-screen fade-in backdrop-filter backdrop-blur-sm'
                />
            )}
            <nav
                className={clsx(
                    'fixed p-5 right-0 top-0 w-[70%] sm:w-[50%] h-full bg-white z-20 shadow-2xl transform transition-all duration-500',
                    {
                        'translate-x-0': IsSideMenuOpen,
                        'translate-x-full': !IsSideMenuOpen
                    }
                )}
            >
                <IoCloseOutline
                    size={50}
                    className='absolute transition-all rounded cursor-pointer top-5 right-5 hover:text-gray-600 hover:bg-gray-100'
                    onClick={() => closeMenu()}
                />
                {/* Menu */}
                {isAuthenticated && (
                    <>
                        <Link
                            href="/profile"
                            onClick={() => closeMenu()}
                            className='flex items-center p-2 mt-20 transition-all rounded hover:bg-gray-100'
                        >
                            <IoPersonOutline size={30} />
                            <span className='ml-3 text-xl'>Perfil</span>
                        </Link>
                        <Link
                            href="/orders"
                            onClick={() => closeMenu()}
                            className='flex items-center p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        >
                            <IoTicketOutline size={30} />
                            <span className='ml-3 text-xl'>Ordenes</span>
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <button
                        className='flex items-center w-full p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        onClick={() => logout()}
                    >
                        <IoLogOutOutline size={30} />
                        <span className='ml-3 text-xl'>Salir</span>
                    </button>
                )}
                {!isAuthenticated && (
                    <>
                        <div className='block sm:hidden'>
                                    <Link
                                        href='/allproducts'
                                        onClick={() => closeMenu()}
                                        className='block px-4 py-2 text-md  mt-8 hover:bg-gray-200'
                                    >
                                        Todos los productos
                                    </Link>
                            <button
                                onClick={toggleDropdown}
                                className='flex items-center p-2 transition-all rounded hover:bg-gray-100 w-full text-left'
                            >
                                <span className='ml-3 text-md'>Categorías</span>
                            </button>
                            {isDropdownOpen && (
                                <div className='mt-2 bg-gray-100 rounded-md shadow-lg'>
                                    <Link
                                        href='/category/proteinas'
                                        onClick={() => closeMenu()}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                    >
                                        Proteínas
                                    </Link>
                                    <Link
                                        href='/category/creatinas'
                                        onClick={() => closeMenu()}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                    >
                                        Creatinas
                                    </Link>
                                    <Link
                                        href='/category/preentrenos'
                                        onClick={() => closeMenu()}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                    >
                                        Preworkouts
                                    </Link>
                                    <Link
                                        href='/category/vitaminas'
                                        onClick={() => closeMenu()}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                    >
                                        Multivitamínicos
                                    </Link>
                                    {marcas.map((marca) => (
                                        <Link
                                            key={marca.id}
                                            href={`/marca/${marca.name}`}
                                            onClick={() => closeMenu()}
                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                        >
                                            {marca.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link
                            onClick={() => closeMenu()}
                            href="/auth/login"
                            className='flex items-center p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        >
                            <IoLogInOutline size={30} />
                            <span className='ml-3 text-xl'>Ingresar</span>
                        </Link>
                    </>
                )}
                {isAdmin && (
                    <>
                        <div className='w-full h-px my-10 bg-gray-200' />
                        <Link
                            onClick={() => closeMenu()}
                            href="/admin/products"
                            className='flex items-center p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        >
                            <IoShirtOutline size={30} />
                            <span className='ml-3 text-xl'>Products</span>
                        </Link>
                        <Link
                            onClick={() => closeMenu()}
                            href="/admin/orders"
                            className='flex items-center p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        >
                            <IoTicketOutline size={30} />
                            <span className='ml-3 text-xl'>Todas las Ordenes</span>
                        </Link>
                        <Link
                            onClick={() => closeMenu()}
                            href="/admin/users"
                            className='flex items-center p-2 mt-8 transition-all rounded hover:bg-gray-100'
                        >
                            <IoPeopleOutline size={30} />
                            <span className='ml-3 text-xl'>Usuarios</span>
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
};
