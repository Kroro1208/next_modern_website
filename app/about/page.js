'use client'
import Container from '@/components/Container';
import React from 'react';
import { Title } from '@/components/Title';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';
import { AiOutlineApple } from "react-icons/ai";



function AboutPage() {
    return (
        <div className="backgroundImage min-h-screen">
            <Container>
                <div className='flex flex-col gap-6 p-8'>
                    <FadeIn>
                        <div className='mt-5 text-3xl flex gap-3'>
                            <AiOutlineApple />
                            <Title title={"Our Vision and Mission"} />
                            <AiOutlineApple />
                        </div>
                    </FadeIn>
                    <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>
                        <div className='max-w-2xl'>
                            <FadeIn>
                                <p className='text-2xl'><strong>ビジョン（Vision）</strong></p>
                            </FadeIn>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                                animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <br />「技術を通じて世界中の人々の生活を豊かにし、持続可能な未来を創造する」
                                <br />このビジョンは、技術革新を通じて人々の日常生活の質を向上させ、社会や環境に対しても肯定的な影響を与えることを目指すという企業の野心を示しています。
                                <br />持続可能な未来という言葉は、経済的な成功だけでなく、環境保護や社会貢献にも配慮した事業展開を意味します。
                            </motion.p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>
                        <div>
                            <FadeIn>
                                <p className='text-2xl'><strong>使命（Mission）</strong></p>
                            </FadeIn>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                                animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <br />革新的な技術とサービスを開発し、使いやすさ、アクセシビリティ、セキュリティを核として、全ての人が情報社会に参加できるようにする」
                                <br />ここでの使命は、革新的な製品やサービスを通じて、技術の利便性を高めると同時に、情報へのアクセス機会を平等にすることを目標としています。
                                <br />使いやすさやセキュリティは、ユーザーにとって最も重要な要素の一つであり、IT企業が提供する製品やサービスの品質を高める上で欠かせない部分です。
                            </motion.p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>
                        <div>
                            <FadeIn>
                                <p className='text-2xl'><strong>パートナーシップ（Partnership）</strong></p>
                            </FadeIn>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                                animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <br />「共に成長し、共に成功を分かち合うための強固な関係構築」私たちは、単に商取引を超えた相互利益を追求します。
                                <br />これにより、長期的な関係が築かれ、互いに成長の機会を提供することができます。
                                <br />異なる企業や組織との協力関係を築くことで、新しいアイデアや技術の交換が生まれ、イノベーションが促進されます。
                                <br />強力なパートナーシップは、ビジネスのリスクを分散し、市場の変動や不確実性に対する耐性を高めることができます。
                            </motion.p>
                        </div>
                        <div className='max-w-2xl'>
                            <FadeIn>
                                <p className='text-2xl'><strong>カスタマーファースト（Customer First）</strong></p>
                            </FadeIn>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }} // 文字を透明にして、少し下からスタート
                                animate={{ opacity: 1, y: 0 }}  // 文字を徐々に不透明にし、元の位置に戻す
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <br />「顧客のニーズと満足を最優先に考え、すべてのビジネスプロセスを顧客中心で設計する」
                                <br />私たちは、顧客の期待を超える製品やサービスを提供することを目指し、顧客満足度を高めます。
                                <br />顧客のニーズを理解し、それに応えることで、顧客ロイヤリティが構築され、繰り返しビジネスや口コミによる新規顧客獲得に繋がります
                                <br />高い顧客満足度とロイヤリティは、長期的なビジネスの成長と収益性の向上に直接貢献します。
                            </motion.p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutPage