'use client';
import React from 'react'
import Link from 'next/link';
import { headerListItems } from '@/constants';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


function Header() {
    const [active, setActive] = useState();
    const pathName = usePathname();
    useEffect(() => {
        setActive(pathName);
    }, [pathName])

    return (
        <div className='w-full h-20 border-b-[1px] border-gray-500 bg-white'>
            <div className='h-full max-wc-screen-2xl mx-auto flex items-center justify-between mr-3'>
                {/* logo */}
                <Link href={"/"} className='relative group overflow-hidden'>
                    <p className='text-2xl font-bold'>Next Tech</p>
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
            </div>
        </div>
    );
}

export default Header;