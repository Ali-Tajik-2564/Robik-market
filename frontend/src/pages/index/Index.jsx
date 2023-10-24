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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
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
            <div className="products md:flex-row flex-col items-center justify-center md:justify-evenly md:flex-wrap gap-y-4 h-auto mt-4" data-aos="fade-up" data-aos-duration="2000">

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
                <div className='w-full flex-wrap-reverse gap-y-3 my-6 hidden xl:flex justify-evenly items-center'>
                    <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
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
                    <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="7-000-000" percent="32" time="2023 / 9 / 19" />
                </div>
                <div className='w-full   xl:hidden '>
                    <div className="mb-4  flex item-end  " >
                        {/* <Swiper
                            slidesPerView={2}
                            spaceBetween={80}

                            dir='rtl'
                            direction='rtl'
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation, Pagination]}
                            className="mySwiper ">



                            <SwiperSlide className='w-[29rem] z-10'>

                                <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="7-000-000" percent="32" time="2023 / 9 / 19" />

                            </SwiperSlide>

                            <SwiperSlide >
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
                                </Link></SwiperSlide>
                            <SwiperSlide >
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
                                </Link></SwiperSlide>


                        </Swiper> */}
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={10}

                            centeredSlides={false}



                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='flex items-center justify-center' >
                                <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="7-000-000" percent="32" time="2023 / 9 / 19" />

                            </SwiperSlide>
                            <SwiperSlide className='flex items-center justify-center' ><Link to="/products/3" className='decoration-0 list-none'>
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
                            </Link></SwiperSlide>
                            <SwiperSlide className='flex items-center justify-center' >

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
                                </Link></SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div >
            <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-evenly w-[90%] h-30 my-3 p-4 lg:items-center border-b-3 mx-auto ">
                <div className="flex mx-auto flex-row-reverse justify-center items-center w-48">
                    <span><img src="./images/benefit1.png" alt="" className='m-2' /></span>
                    <span>ارسال سریع و رایگان</span>
                </div>
                <div className="flex mx-auto flex-row-reverse justify-center items-center w-48">
                    <span><img src="./images/benefit2.png" alt="" className='m-2' /></span>
                    <span>ضمانت بازگشت وجه</span>
                </div>
                <div className="flex mx-auto flex-row-reverse justify-center items-center w-48">
                    <span><img src="./images/benefit3.png" alt="" className='m-2' /></span>
                    <span>ضمانت اصالت کالا
                    </span>
                </div>
                <div className="flex mx-auto flex-row-reverse justify-center items-center w-48">
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
                <div className="flex flex-row flex-wrap gap-x-2 items-center justify-center gap-y-6 my-4 mx-6" data-aos="fade-up" data-aos-duration="1000">

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
            <div className="w-[88%] mx-auto flex flex-col xl:flex-row-reverse gap-x-4  " data-aos="fade-up" data-aos-duration="1000" >
                <img src="./images/promo-image1.png" alt="" className='rounded-md hidden xl:flex' />
                <img src="./images/promo-image2.png" alt="" className='rounded-md ' />
            </div>
            <div className="mt-2 mb-0 p-4" >
                <Title title="جدیدترین مقالات آموزشی" subTitle="" />
                <div className="flex flex-wrap flex-col lg:flex-row-reverse items-center gap-y-4  gap-x-2 xl:gap-x-6 justify-center mt-4" data-aos="fade-up" data-aos-duration="1000">
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
