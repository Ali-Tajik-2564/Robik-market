import React from 'react'
import Timer from '../Timer/Timer'

export default function OffProduct({ img, title, price, percent, time }) {


    return (
        <>
            <div className="flex flex-row-reverse w-2/5   bg-white my-1 mx-2 shadow-md rounded-lg ">
                <img src={`./images/${img}`} className='w-1/3 h-[27rem]' />
                <div className='flex flex-col justify-start items-end w-2/3 mr-5'>
                    <h1 className="text-pink-300 mt-3 mr-4 text-2xl">محصول ویژه امروز</h1>
                    <p className=" mr-4"> فروش به مدت محدود</p>
                    <h1 className="text-black text-3xl mt-5  mr-4">{title}</h1>
                    <div className='flex flex-lg-row-reverse items-center justify-evenly my-5  w-full'>
                        <span className='text-pink-300 text-xl  ml-4 mx-3'>{price} تومان</span>
                        <span className='mr-4 mx-3  line-through text-xl'> {price} تومان</span>
                    </div>

                    <span className='flex w-full justify-end overflow-visible text-yellow-400  cursor-pointer my-2 mr-4 text-xl group '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>

                        همین حالا بخرید</span>

                    <Timer date={time} />
                </div>
            </div>
        </>
    )
}
