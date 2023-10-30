import React from 'react'
import { Link } from 'react-router-dom'

export default function SideProductBox({ img, title, price }) {
    return (
        <div>
            <Link to="/products/3">
                <div className="w-full h-28 flex flex-col md:flex-row-reverse items-center justify-between hover:opacity-90 overflow-hidden">
                    <img src={`../images/${img}`} alt="" className='w-24 h-3/4 rounded-sm ' />
                    <span className='flex flex-col items-end space-y-1 justify-end mr-2'>
                        <h1 className='text-sm text-mainPrimaryLight font-bold text-right line-clamp-4'>{title}</h1>
                        <p className='text-base font-semibold text-mainPrimary text-end'> {price} <span>
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
