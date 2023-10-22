import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderPage({ title, subtitle, route }) {
    return (
        <div className=' w-full h-32 md:h-40 flex flex-col justify-start items-end  p-3 md:p-10 pb-5 md:pb-14 bg-mainPrimary text-primaryText  space-y-4'>
            <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
            <p className='text-sm font-semibold'>{subtitle}</p>

            <div className='flex flex-row-reverse gap-2 text-sm font-semibold '>
                <Link to="/" >{route}</Link>
                /

            </div>

        </div>
    )
}
