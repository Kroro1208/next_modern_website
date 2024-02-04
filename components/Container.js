import React from 'react'

function Container({ children }) {
    return (
        <div className='max-w-screen-2xl mx-auto px-2 py-10'>{children}</div> // 共通に充てるスタイリングを設定
    )
}

export default Container