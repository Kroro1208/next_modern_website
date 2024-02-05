import React from 'react'
import Container from "./Container"
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";
import Link from 'next/link';


function Footer() {
    const footerList = [
        {
            id: 111,
            title: 'お問い合わせ',
            link: '#',
            icon: true
        },
        {
            id: 112,
            title: '特定商品取引法',
            link: '#',
            icon: true
        },
        {
            id: 113,
            title: 'プライバシーポリシー',
            link: '#',
            icon: true
        },
        {
            id: 114,
            title: '採用情報',
            link: '#',
            icon: true
        },
    ]

    return (
        <div className='w-full bg-blueLight mt-10'>
            <Container>
                <div className='text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2'>
                    <p className='mb-2 text-gray-700'>© 2024 Naoya.Y</p>
                    <ul className='flex items-center gap-2 mb-2'>
                        {
                            footerList.map((item) => (
                                <Link key={item.id} href={item.link}>
                                    <li className='flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer'>
                                        {item.title}
                                        {item.icon && <TbMinusVertical />}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <div className='flex items-center gap-4 mx-3 text-gray-700'>
                        <a href="" target='_blank' className='text-xl hover:text-primeColor cursor-pointer duration-300'><FaGithubAlt /></a>
                        <a href="" target='_blank' className='text-xl hover:text-primeColor cursor-pointer duration-300'><FaFacebook /></a>
                        <a href="" target='_blank' className='text-xl hover:text-primeColor cursor-pointer duration-300'><FaYoutube /></a>
                        <a href="" target='_blank' className='text-xl hover:text-primeColor cursor-pointer duration-300'><FaInstagram /></a>
                        <a href="" target='_blank' className='text-xl hover:text-primeColor cursor-pointer duration-300'><FaSquareXTwitter /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer