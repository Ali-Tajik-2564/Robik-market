import React from 'react'
import "./index.css"
import LandingPage from '../../component/LadingPage/LandingPage'
import Section from '../../component/Section/Section'
import ProductBox from '../../component/ProductBox/ProductBox'
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import Title from '../../component/Title/Title'
import OffProduct from '../../component/OffProduct/OffProduct'
export default function Index() {
    return (
        <>
            <LandingPage />
            <Section names={[
                { title: "محصولات منتخب" },
                { title: "تخفیف خورده" },
                { title: "پربازدید ترین" },
            ]} />
            <div className="products">
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                    <p className='product-info'>
                        <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                        <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />

                            <BsStarHalf className="text-yellow-400" />

                        </span >


                    </p>
                </ProductBox>
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                    <p className='product-info'>
                        <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                        <span className='product-info-item flex justify-end'>   (۱۲ رای دهنده)
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />

                            <BsStarHalf className="text-yellow-400" />

                        </span >


                    </p>
                </ProductBox>
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                    <p className='product-info'>
                        <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                        <span className='product-info-item  flex justify-end'>    (۱۲ رای دهنده)
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />
                            <BsStarFill className="text-yellow-400" />

                            <BsStarHalf className="text-yellow-400" />

                        </span >


                    </p>
                </ProductBox>


            </div >
            <div className=' w-full bg-neutral-100 p-2 m-0 h-auto  '>

                <Title title="فروش ویژه" subTitle="محصولات دارای تخفیف ویژه به مدت محدود" />
                <div className='w-full my-6 flex justify-evenly items-center'>
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>
                            <span className='absolute top-1 right-1  text-white bg-pink-500 font-thin rounded-lg p-1 '>تخفیف ویژه</span>
                            <span className='product-info-item text-yellow-400'>3.700.000 تومان</span>
                            <span className='product-info-item  flex justify-end'>    (۱۲ رای دهنده)
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />

                                <BsStarHalf className="text-yellow-400" />

                            </span >


                        </p>
                    </ProductBox>
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>
                            <span className='absolute top-1 right-1  text-white bg-pink-500 font-thin rounded-lg p-1 '>تخفیف ویژه</span>
                            <span className='product-info-item text-yellow-400'>3.700.000 تومان</span>
                            <span className='product-info-item  flex justify-end '>    (۱۲ رای دهنده)
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />
                                <BsStarFill className="text-yellow-400" />

                                <BsStarHalf className="text-yellow-400" />

                            </span >


                        </p>
                    </ProductBox>
                    <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="۷.۰۰۰.۰۰۰" percent="32" time="3" />
                </div>
            </div >
            <div className="bg-white flex flex-row-reverse justify-evenly w-[90%] h-30 my-3 p-4 items-center border-b-2 mx-auto ">
                <div className="flex flex-row-reverse justify-center items-center w-[20%]">
                    <span><img src="./images/benefit1.png" alt="" className='m-2' /></span>
                    <span>ارسال سریع و رایگان</span>
                </div>
                <div className="flex flex-row-reverse justify-center items-center w-[20%]">
                    <span><img src="./images/benefit2.png" alt="" className='m-2' /></span>
                    <span>ضمانت بازگشت وجه</span>
                </div>
                <div className="flex flex-row-reverse justify-center items-center w-[20%]">
                    <span><img src="./images/benefit3.png" alt="" className='m-2' /></span>
                    <span>ضمانت اصالت کالا
                    </span>
                </div>
                <div className="flex flex-row-reverse justify-center items-center w-[20%]">
                    <span><img src="./images/benefit4.png" alt="" className='m-2' /></span>
                    <span>پشتیبانی 24 ساعته</span>
                </div>
            </div>



        </>
    )
}
