import React from 'react'
import Timer from '../Timer/Timer'

export default function OffProduct({ img, title, price, percent, time }) {


    return (
        <>
            <div className="flex flex-row-reverse   w-[29rem]   bg-primaryText my-1 mx-2 shadow-md rounded-lg " data-aos="zoom-in" data-aos-duration="1000">
                <img src={`./images/${img}`} className='w-1/3 h-[27rem]' />
                <div className='flex flex-col justify-start items-end w-2/3 mr-7'>
                    <h1 className="text-mainPrimaryLight mt-3 mr-4 text-2xl">محصول ویژه امروز</h1>
                    <p className=" mr-4"> فروش به مدت محدود</p>
                    <h1 className="text-black lg:text-2xl text-xl  mt-5  mr-4">{title}</h1>
                    <div className=' flex  flex-col gap-y-2 lg:flex-row-reverse items-end lg:items-center justify-evenly  my-5   w-full'>
                        <span className='text-mainPrimaryLight text-lg lg:text-xl ml-1 lg:ml-4 mx-2 lg:mx-3'>{price} تومان</span>
                        <span className=' mr-1 lg:mr-4 mx-2 lg:mx-3  line-through text-lg lg:text-xl'> {price} تومان</span>
                    </div>

                    <span className='flex w-full justify-end overflow-visible text-mainPrimaryLight  cursor-pointer my-2 mr-4 text-xl group '>
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
