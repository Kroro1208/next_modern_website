import React from 'react'
import Container from './Container'
import Image from 'next/image';
import logo1 from '/public/clientImg/logo1.png';
import logo2 from '/public/clientImg/logo2.png';
import logo3 from '/public/clientImg/logo3.png';
import logo4 from '/public/clientImg/logo4.png';
import logo5 from '/public/clientImg/logo5.png';
import logo6 from '/public/clientImg/logo6.png';
import logo7 from '/public/clientImg/logo7.png';
import logo8 from '/public/clientImg/logo8.png';

const clientImg = [
    ["1", logo1],
    ["2", logo2],
    ["3", logo3],
    ["4", logo4],
    ["5", logo5],
    ["6", logo6],
    ["7", logo7],
    ["8", logo8],
]

function Client() {
    return (
        <div className='mt-24 rounded-tl-3xl rounded-tr-3xl bg-gray-800 py-20'>
            <Container>
                <div className='flex items-center gap-x-8'>
                    <h2 className='text-center text-white text-sm font-semibold ml-5'>導入いただいている企業様一覧</h2>
                    <div className='h-px flex-auto bg-neutral-700 mr-5'></div>
                </div>

                <ul className='mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10'>
                    {clientImg.map(([client, logo]) => (
                        <li key={client}>
                            <Image src={logo} alt={client} />
                        </li>
                    ))}
                </ul>

            </Container>
        </div>
    )
}

export default Client