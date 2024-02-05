'use client'
import React from 'react'
import Container from '@/components/Container';
import { Title, Recommend } from '@/components/Title';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { motion } from 'framer-motion';
import bg1 from "/public/bgImg/bg1.png";
import bg2 from "/public/bgImg/bg2.png";
import bg3 from "/public/bgImg/bg3.png";
import { FaCheck } from "react-icons/fa";



function ServicePage() {
    return (
        <Container>
            <div className='flex flex-col gap-6 p-5'>
                <FadeIn>
                    <Title title={"誰でも簡単に操作できる確定申告アプリです"} />
                </FadeIn>
                <FadeIn>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <div className='flex flex-col items-center'>
                            <motion.div
                                initial={{ scale: 0, y: 200 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 1.0, ease: 'easeOut' }}
                            >
                                <Image
                                    src={bg1}
                                    alt='bg1'
                                    className='w-36 rounded-xl mb-3'
                                />
                            </motion.div>
                            <strong>直感的なUI/UX</strong><br />誰でも簡単に操作できる直感的なインターフェースを提供。確定申告が初めての方でも迷うことなく申告作業を進められます。
                        </div>
                        <div className='flex flex-col items-center'>
                            <motion.div
                                initial={{ scale: 0, y: 100 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Image
                                    src={bg2}
                                    alt='bg2'
                                    className='w-40 rounded-xl mb-3'
                                />
                            </motion.div>
                            <strong>自動計算機能</strong><br />収入、控除項目を入力するだけで、自動的に税額を計算。最新の税法に基づいた正確な計算が可能です
                        </div>
                        <div className='flex flex-col items-center'>
                            <motion.div
                                initial={{ scale: 0, y: 200 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                            >
                                <Image
                                    src={bg3}
                                    alt='bg3'
                                    className='w-36 rounded-xl mb-3'
                                />
                            </motion.div>
                            <strong>電子申請対応</strong><br />完成した申告書はアプリから直接税務署に電子申請。書類の郵送や税務署への持参が不要になります。
                        </div>
                    </div>
                </FadeIn>

                <div className='flex flex-col gap-3 mt-5'>
                    <FadeIn>
                        <Recommend recommend="こんな方におすすめ" />
                    </FadeIn>
                    <FadeIn>
                        <ul className='flex flex-row gap-10 mt-5'>
                            <motion.div
                                initial={{ scale: 0, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-sm" /><span>確定申告が初めてで不安な方</span>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-sm" /><span>忙しくて確定申告にかける時間がない方</span>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-sm" /><span>節税に興味があるが、どうすればいいかわからない方</span>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-sm" /><span>確定申告の手続きをもっと効率的に済ませたい方</span>
                                </li>
                            </motion.div>
                        </ul>
                        <br />
                        <p className='text-2xl font-semibold mt-8'>「カクテイ君」で、確定申告の新しいスタンダードを体験しましょう。もう確定申告で悩む必要はありません。<br />今すぐダウンロードして、確定申告の新しい形を体験してみませんか？</p>
                    </FadeIn>
                </div>
            </div>
        </Container>
    )
}

export default ServicePage