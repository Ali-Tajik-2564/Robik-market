import React from 'react'
import { BsStar, BsStarFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function GridProductBox({ title, img, desc, price, star, route, voteCount }) {
    let fillStar = Array(star).fill(0)
    console.log(fillStar);
    let emptyStar = Array(5 - star).fill(0)
    console.log(emptyStar);
    return (
        <div
            class=" max-w-full  flex mx-3  flex-row-reverse rounded-xl overflow-hidden bg-primaryText shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700   hover:opacity-95 transition-all duration-150 ease-out" >
            <img
                class="h-96 w-1/3 rounded-t-lg  bg-none object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                src={`../images/${img}`}
                alt="" />
            <div class="w-full flex flex-col justify-end items-end p-6 gap-y-4">
                <p className="text-xs font-medium text-gray-500">{route}</p>
                <h2
                    class="mb-2 text-2xl font-medium text-mainPrimary dark:text-neutral-50">
                    {title}
                </h2>
                <div className='flex items-center justify-center gap-x-2'>
                    <p className="text-base font-normal">تعداد نظرات ({voteCount})</p>
                    <span className='flex items-center justify-center text-mainPrimaryLight  '>
                        {fillStar.map(() => (
                            <BsStarFill />
                        ))}
                        {
                            emptyStar.map(() => (
                                <BsStar />
                            ))
                        }
                    </span>
                </div>
                <p class="mb-4 text-base font-medium text-end text-neutral-600 dark:text-neutral-200 line-clamp-4">
                    {desc}
                </p>
                <p class=" flex items-center gap-x-1 justify-end text-mainPrimaryLight dark:text-neutral-300">
                    <span className='text-xs '>تومان</span>
                    <span className='text-base'>{price}</span>
                </p>
                <button className='mx-2 my-1 p-2 text-primaryText bg-mainPrimaryLight hover:bg-mainPrimaryLight/90 transition-all duration-150 rounded-lg shadow-sm'><Link to="/products/3">مشاهده و خرید</Link></button>
            </div>
        </div>
    )
}
