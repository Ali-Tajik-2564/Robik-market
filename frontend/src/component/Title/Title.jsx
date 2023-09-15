import React from 'react'

export default function Title({ title, subTitle }) {
    return (
        <div className='flex flex-col justify-center items-center h-11 w-full space-y-2 my-4' >
            <h1 className='text-black text-2xl '>{title}</h1>
            <p className='text-gray-800 text-lg'>{subTitle}</p>
        </div>
    )
}
