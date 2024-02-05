import React from 'react'

function Title({ title }) {
    return (
        <h2 className='text-2xl font-semibold'>{title}</h2>
    )
}

function Recommend({ recommend }) {
    return (
        <h2 className='text-3xl font-semibold'>{recommend}</h2>
    )
}

export { Title, Recommend };
