'use client'
import Container from '@/components/Container';
import { Title } from '@/components/Title';
import Image from 'next/image';
import React from 'react';
import directorImg from "/public/directorImg/director.jpg";
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

function directorPage() {
    return (
        <Container>
            <div className='flex flex-col gap-6 p-8'>
                <Title title={"代表からのご挨拶"} />
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <p className='max-w-2xl'>
                        親愛なる訪問者様、私たちのホームページへようこそ。<br />
                        <br />私は、NextTechの創設者兼代表を務めております、John Doeと申します。<br />
                        当社は2000年に、テクノロジーを通じて世界をより良い場所に変えるという一つの明確なビジョンのもとに設立されました。<br />
                        このビジョンは今日も変わることなく、私たちのすべてのプロジェクトとイニシアチブの中心にあります。<br />
                        <br />私たちは、イノベーションを通じて日々の生活を豊かにし、ビジネスの可能性を広げることに情熱を傾けています。
                        そして、私たちのチームは、フロントエンドからバックエンドまで、最新のプログラミング技術を駆使して、ユーザー中心のアプリケーションとWebサービスを開発しています。<br />
                        <br />技術がもたらす可能性を最大限に引き出し、お客様と社会に真の価値を提供することを目指しています。
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                        animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <Image
                            src={directorImg}
                            alt='directorImg'
                            className='w-85 rounded-s-full object-cover my-auto ml-10 mx-auto'
                        />
                    </motion.div>
                </div>
                <div className='flex flex-col gap-10 justify-between mt-5 max-w-2xl'>
                    <Title title={"徹底した教育支援"} />
                    <p>
                        さらに、プログラミング学習者から業界のベテランまで、すべての人が技術の力を最大限に活用できるよう支援することにも力を入れています。
                        教育とリソースの提供を通じて、次世代の技術リーダーを育成し、持続可能なテクノロジーの発展に貢献していきたいと考えています。<br />
                    </p>
                    <p className='max-w-2xl mt-5'>
                        目標は、革新的なソリューションを提供することで、お客様のビジネスや生活に実質的な変化をもたらすことです。<br />
                        お客様の成功が私たちの成功であると信じており、そのためには、常に最高のサービスを提供し、お客様の期待を超えることを目指しています。<br />
                        <br />Next Techの旅にご興味をお持ちいただき、ありがとうございます。私たちと共に、テクノロジーを通じてより良い未来を創造していく旅を始めましょう。<br />
                    </p>
                </div>

                <div className='mt-10'>
                    Next Tech 代表<br />
                    John Doe
                </div>
            </div>

        </Container >
    )
}

export default directorPage