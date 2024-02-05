'use client'

import Container from '@/components/Container'
import React from 'react'
import { Title } from '@/components/Title'
import FadeIn from '@/components/FadeIn'
import { motion } from 'framer-motion'

function ContactPage() {
    return (
        <Container>
            <div className='flex flex-col gap-6 p-8'>
                <FadeIn>
                    <Title title={"お気軽にお問い合わせください。"} />
                </FadeIn>
                <motion.div
                    initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                    animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className='flex flex-col md:flex-row items-center gap-10'>
                    <p className='max-w-2xl'>開発について、働く環境について、気になることがあれば何でもお問い合わせください。<br />
                        24時間以内に返答させていただきます。</p>
                </motion.div>
            </div>

            <div>
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <FadeIn>
                            <div class="flex flex-col text-center w-full mb-12">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">お問い合わせフォーム</h1>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">開発依頼や見積もり等のお問い合わせの場合は、できるだけ詳細にお願いいたします。</p>
                            </div>
                        </FadeIn>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                                animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">お名前</label>
                                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">メールアドレス</label>
                                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">お問い合わせ内容</label>
                                        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded">送信</button>
                                </div>
                                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a class="text-indigo-500">yamagata_7580@yahoo.co.jp</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

        </Container>
    )
}

export default ContactPage