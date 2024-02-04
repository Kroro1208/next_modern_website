"use client";
import React from 'react';
import Container from './Container';
import Image from 'next/image';
import bannerImage1 from '/public/bannerImg/img1.png';
import bannerImage2 from '/public/bannerImg/img2.png';
import bannerImage4 from '/public/bannerImg/img4.png';
import { motion } from "framer-motion";

function Banner() {
    return (
        <div className='bg-blue-900 w-full rounded-bl-3xl rounded-br-3xl relative px-4'>
            <Container>
                <div className='text-white grid md:grid-cols-2 gap-20 place-items-center'>
                    {/* left */}
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-2xl lg:text-4xl xl:text-3xl font-semibold'>機能のほとんどを無料で利用できます</h1>
                        <p className='text-sm tracking-wide xl:gap-10'>面倒な確定申告書類の作成にサヨナラを告げましょう。我が社のアプリ「カクテイ君」が年度末の確定申告を代行いたします<br />
                            <br />めんどくさい設定やパソコンの知識、操作スキルは不要です。AI音声の質問に答えて入力していくだけで簡単に作成できる、まさに画期的な確定申告作業アプリです。

                        </p>
                        <div className='w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5'>
                            <input type="text" placeholder='メールアドレスを入力してください'
                                className='w-full h-12 border-[1px] border-gray-300 rounded-xl text-base text-gray-600 placeholder:tracking-wider px-4 outline-none hover:border-primeColor duration-300 focus-visible:border-primeColor' />
                            <button className='w-full h-12 rounded-xl bg-red-500 text-white font-medium hover:bg-darkBlue duration-300 cursor-pointer'>無料で試してみる</button>
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-full relative flex justify-center items-center gap-6'>
                        <motion.div
                            initial={{ scale: 0, y: 200 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ duration: 1.0, ease: 'easeOut' }}
                        >
                            <Image
                                src={bannerImage1}
                                alt='bannerImage1'
                                className='w-52 rounded-2xl object-cover' />
                        </motion.div>
                        <div className='flex flex-col gap-7'>
                            <motion.div
                                initial={{ scale: 0, y: 300 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                            >
                                <Image
                                    src={bannerImage2}
                                    alt='bannerImage2'
                                    className='w-52 rounded-2xl object-cover' />
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, y: 200 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 2.0, ease: 'easeOut' }}
                            >
                                <Image
                                    src={bannerImage4}
                                    alt='bannerImage3'
                                    className='w-52 rounded-2xl object-cover' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner