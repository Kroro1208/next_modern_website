import React from 'react'
import Link from 'next/link';
import { headerListItems } from '@/constants';

function Header() {
    return (
        <div className='w-full h-20 border-b-[1px] border-gray-500 bg-white'>
            <div className='h-full max-wc-screen-2xl mx-auto flex items-center justify-between mr-3'>
                {/* logo */}
                <Link href={"/"} className='relative group overflow-hidden'>
                    <p className='text-2xl font-bold'>Next Tech</p>
                    <span className='absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700'></span>
                </Link>
                {/* headerList */}
                <div className='hidden md:inline-flex items-center gap-8 text-sm font-extrabold tracking-wide'>
                    <ul className='flex gap-8'>
                        {
                            headerListItems.map((item) => (
                                <Link key={item.id} href={item.link}>
                                    <li className='text-gray-600 hover:text-primeColor cursor-pointer duration-300 group relative'>
                                        {item.title}
                                        <span className='absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-100'></span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <button className='w-28 h-10 bg-blue-700 text-white rounded hover:bg-primeColor duration-300'>
                        連絡する
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;