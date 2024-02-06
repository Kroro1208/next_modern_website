'use client';
import React from 'react'
import Link from 'next/link';
import { headerListItems } from '@/constants';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TfiClose } from "react-icons/tfi";



function Header() {
    const [active, setActive] = useState();
    const pathName = usePathname();
    const [showMenu, setShowMenu] = useState(false);


    useEffect(() => {
        setActive(pathName);
    }, [pathName])

    return (
        <div className='w-full h-20 border-b-[1px] border-gray-500 bg-white'>
            <div className='h-full max-wc-screen-2xl mx-auto flex items-center justify-between mr-3'>
                {/* logo */}
                <Link href={"/"} className='relative group overflow-hidden'>
                    <p className='text-2xl font-bold pl-5'>Next Tech</p>
                    <span className='absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700'></span>
                </Link>
                {/* headerList */}
                <div className='hidden md:inline-flex items-center gap-8 text-sm font-semibold tracking-wide'>
                    <ul className='flex gap-8'>
                        {
                            headerListItems.map((item) => (
                                <Link key={item.id} href={item.link}>
                                    <li className={`${active === item.link ? 'text-primeColor' : 'text-black'} hover:text-primeColor cursor-pointer duration-600 group relative`}>
                                        {item.title}
                                        <span className={`${active === item.link ? 'scale-100' : 'scale-0'} absolute w-full group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}></span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <button className='w-28 h-8 mb-2 bg-blue-700 text-white rounded-full hover:bg-primeColor duration-300'>
                        連絡する
                    </button>
                </div>
                {/* small logo */}
                <div className='w-8 h-7 group lg:hidden flex flex-col justify-between cursor-pointer overflow-hidden'
                    onClick={() => setShowMenu(true)}
                >
                    <span className='w-full h-[3px] bg-gray-500 group-hover:bg-primeColor
                    inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500'></span>
                    <span className='w-full h-[3px] bg-gray-500 group-hover:bg-primeColor
                    inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500'></span>
                    <span className='w-full h-[3px] bg-gray-500 group-hover:bg-primeColor'></span>
                </div>

                {/* small screen menu */}
                <div className='w-full h-screen lg:hidden fixed top-0 left-0 bg-darkBlue bg-opacity-90 z-50'>
                    <span className='absolute right-2 top-8 text-3xl text-red-200 hover:text-red-600 cursor-pointer duration-300'>
                        <TfiClose />
                    </span>
                    <Link href={"/"}>
                        <p className='text-2xl font-bold text-white mb-4 p-5'>
                            Next Tech
                        </p>
                    </Link>
                    <ul className='flex flex-col text-gray-300 text-sm gap-3 font-semibold p-5'>
                        {headerListItems.map((item) => (
                            <Link key={item.id} href={item.link}>
                                <li className='hover:text-black cursor-pointer duration-300'>{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;