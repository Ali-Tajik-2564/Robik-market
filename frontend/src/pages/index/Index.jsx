import React from 'react'
import "./index.css"
import LandingPage from '../../component/LadingPage/LandingPage'
import Section from '../../component/Section/Section'
import ProductBox from '../../component/ProductBox/ProductBox'
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import Title from '../../component/Title/Title'
import OffProduct from '../../component/OffProduct/OffProduct'
import ArticleBox from '../../component/ArticleBox/ArticleBox'
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from '../../component/Footer/Footer'
import { Link } from 'react-router-dom'
export default function Index() {
    AOS.init()
    return (
        <>
            <LandingPage />
            <Section names={[
                { title: "محصولات منتخب" },
                { title: "تخفیف خورده" },
                { title: "پربازدید ترین" },
            ]} />
            <div className="products h-auto mt-4" data-aos="fade-up" data-aos-duration="2000">

                <Link to="/products/3" className='decoration-0 list-none'>
                    <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                        <p className='product-info '>
                            <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                            <span className='product-info-item flex justify-end  gap-x-2'>
                                <span>(۱۲ رای دهنده) </span>
                                <span className='flex'>
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />

                                    <BsStarHalf className="text-mainPrimaryLight" />
                                </span>
                            </span >


                        </p>
                    </ProductBox>
                </Link>

                <Link to="/products/3" className='decoration-0 list-none'>
                    <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                        <p className='product-info '>
                            <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                            <span className='product-info-item flex justify-end  gap-x-2'>
                                <span>(۱۲ رای دهنده) </span>
                                <span className='flex'>
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />

                                    <BsStarHalf className="text-mainPrimaryLight" />
                                </span>
                            </span >


                        </p>
                    </ProductBox>
                </Link>

                <Link to="/products/3" className='decoration-0 list-none'>
                    <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                        <p className='product-info '>
                            <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                            <span className='product-info-item flex justify-end  gap-x-2'>
                                <span>(۱۲ رای دهنده) </span>
                                <span className='flex'>
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />
                                    <BsStarFill className="text-mainPrimaryLight" />

                                    <BsStarHalf className="text-mainPrimaryLight" />
                                </span>
                            </span >


                        </p>
                    </ProductBox>
                </Link>

            </div >
            <div className=' w-full bg-primaryText p-2 mt-0 h-auto  '>

                <Title title="فروش ویژه" subTitle="محصولات دارای تخفیف ویژه به مدت محدود" />
                <div className='w-full my-6 flex justify-evenly items-center'>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>
                    <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="7-000-000" percent="32" time="2023 / 9 / 19" />
                </div>
            </div >
            <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white flex flex-row-reverse justify-evenly w-[90%] h-30 my-3 p-4 items-center border-b-3 mx-auto ">
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
            <div className='w-full my-4 p-4 '>
                <Title title="پرفروش ترین محصولات" subTitle="" />

                <Section names={[
                    { title: "گوشی موبایل" },
                    { title: "لپ تاپ" },
                    { title: "تجهیزات کامپیوتر" },
                    { title: "دوربین" },
                ]} />
                <div className="grid grid-cols-4 grid-rows-2 gap-y-6 my-4 mx-8" data-aos="fade-up" data-aos-duration="1000">

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>

                    <Link to="/products/3" className='decoration-0 list-none'>
                        <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                            <p className='product-info '>
                                <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                <span className='product-info-item flex justify-end  gap-x-2'>
                                    <span>(۱۲ رای دهنده) </span>
                                    <span className='flex'>
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />
                                        <BsStarFill className="text-mainPrimaryLight" />

                                        <BsStarHalf className="text-mainPrimaryLight" />
                                    </span>
                                </span >


                            </p>
                        </ProductBox>
                    </Link>
                </div>
            </div>
            <div className="w-[88%] mx-auto flex flex-row-reverse gap-x-4  " data-aos="fade-up" data-aos-duration="1000" >
                <img src="./images/promo-image1.png" alt="" className='rounded-md ' />
                <img src="./images/promo-image2.png" alt="" className='rounded-md ' />
            </div>
            <div className="mt-2 mb-0 p-4" >
                <Title title="جدیدترین مقالات آموزشی" subTitle="" />
                <div className="flex flex-row-reverse gap-x-6 justify-center mt-4" data-aos="fade-up" data-aos-duration="1000">
                    <Link to="/articles/3">
                        <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                            <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                        </ArticleBox>
                    </Link>
                    <Link to="/articles/3">
                        <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                            <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                        </ArticleBox>
                    </Link>
                    <Link to="/articles/3">
                        <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                            <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                        </ArticleBox>
                    </Link>

                </div>

            </div>

        </>
    )
}
