import React from 'react'
import Container from "./Container"

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
        <div>
            <Container>
                <div>
                    <p>© 2024 Naoya.Y</p>
                    <ul>
                        {
                            footerList.map((item) => (
                                <li key={item.id}>
                                    {item.title}
                                    {item.icon}
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <a href="">GitHub</a>
                        <a href="">facebook</a>
                        <a href="">Youtube</a>
                        <a href="">Instagram</a>
                        <a href="">X(旧Twitter)</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer