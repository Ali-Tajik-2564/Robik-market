import React from 'react'
import { Link } from 'react-router-dom'

export default function SideProductBox({ img, title, price }) {
    return (
        <div>
            <Link to="/products/3">
                <div className="w-full h-28 flex flex-row-reverse items-start justify-between hover:opacity-90 overflow-hidden">
                    <img src={`../images/${img}`} alt="" className='w-24 h-3/4 rounded-sm ' />
                    <span className='flex flex-col items-end space-y-1 justify-end mr-2'>
                        <h1 className='text-sm font-bold text-right'>{title}</h1>
                        <p className='text-base font-semibold text-yellow-500 text-end'> {price} <span>
                            {
                                price === ! "" ? "تومان" : ""
                            }
                        </span>  </p>
                    </span>
                </div>
            </Link>
        </div>
    )
}
