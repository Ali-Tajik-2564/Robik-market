import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderPage({ title, subtitle, route }) {
    return (
        <div className=' w-full h-38 flex flex-col justify-start items-end p-10 pb-14 bg-mainPrimary space-y-4'>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className='text-sm font-semibold'>{subtitle}</p>

            <div className='flex flex-row-reverse gap-2 text-sm font-semibold '>
                <Link to="/" >{route}</Link>
                /

            </div>

        </div>
    )
}
