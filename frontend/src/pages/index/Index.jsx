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
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
export default function Index() {
    return (
        <>
            <LandingPage />
            <Section names={[
                { title: "محصولات منتخب" },
                { title: "تخفیف خورده" },
                { title: "پربازدید ترین" },
            ]} />
            <div className="products h-auto">
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
            <div className=' w-full bg-neutral-100 p-2 mt-0 h-auto  '>

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
                    <OffProduct title="گوشی موبایل سامسونگ" img="megamenu-image1.png" price="7-000-000" percent="32" time="2023 / 9 / 19" />
                </div>
            </div >
            <div className="bg-white flex flex-row-reverse justify-evenly w-[90%] h-30 my-3 p-4 items-center border-b-3 mx-auto ">
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
                <div className="grid grid-cols-4 grid-rows-2 gap-y-6 my-4 mx-8">
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                    <ProductBox img={"slide2.jpg"} title={"مودم روتر"} route="گوشی موبایل  /  سامسونگ"  >

                        <p className='product-info'>

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
                </div>
            </div>
            <div className="w-[88%] mx-auto flex flex-row-reverse gap-x-4  ">
                <img src="./images/promo-image1.png" alt="" className='rounded-md ' />
                <img src="./images/promo-image2.png" alt="" className='rounded-md ' />
            </div>
            <div className="mt-2 mb-0 p-4">
                <Title title="جدیدترین مقالات آموزشی" subTitle="" />
                <div className="flex flex-row-reverse gap-x-6 justify-center mt-4">
                    <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                        <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                    </ArticleBox>
                    <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                        <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                    </ArticleBox>
                    <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                        <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                    </ArticleBox>

                </div>

            </div>
            <div className="flex items-center flex-row-reverse mt-0 w-full h-70 p-3 bg-slate-50 ">
                <div className="flex flex-row-reverse p-2  items-center w-1/2 justify-evenly ">
                    <ul className='space-y-2 flex flex-col items-end justify-center'>
                        <li className='text-xl font-bold list-none'>دسترسی سریع</li>
                        <li className="list-none">بلاگ اموزشی</li>
                        <li className="list-none">راهنمای خرید </li>
                        <li className="list-none">شیوه پرداخت</li>
                        <li className="list-none">سوالات متداول</li>
                        <li className="list-none">درباره ما</li>
                        <li className="list-none">تماس با ما</li>
                    </ul>
                    <ul className='space-y-2 flex flex-col items-end justify-center'>
                        <li className='text-xl font-bold list-none'>گروه های محصولات</li>
                        <li className="list-none">گوشی موبایل</li>
                        <li className="list-none">جانبی کامپیوتر</li>
                        <li className="list-none">جانبی موبایل</li>
                        <li className="list-none">ساعت هوشمند</li>
                        <li className="list-none">دوربین</li>
                        <li className="list-none">لپ تاپ</li>
                    </ul>
                    <ul className='space-y-2 flex flex-col items-end justify-center'>
                        <li className='text-xl font-bold list-none'>ناحیه کاربری</li>
                        <li className="list-none">ورود به سایت</li>
                        <li className="list-none">عضویت در سایت </li>
                        <li className="list-none">بازیابی رمز عبور</li>
                        <li className="list-none">سبد خرید</li>
                        <li className="list-none">پیش فاکتور</li>
                    </ul>
                </div>
                <div className="flex flex-col items-end justify-end w-1/2 h-full gap-3  ">
                    <span className='text-lg font-bold flex flex-row-reverse '> <img src="./images/logo.png" alt="" /> روبیک مارکت</span>

                    <span className='w-3/3 text-right'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</span>
                    <div className='w-1/3 text-center h-20 bg-slate-200 rounded-sm'>
                        <span className="  ">7 روز هفته، 24 ساعت شبانه روز
                            پاسخگوی شما هستیم
                            09351234567</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between text-sm text-gray-600 w-[95%] mx-auto h-10 border-t">
                <span className='flex flex-row-reverse items-center gap-x-2'>مارا دنبال کنید
                    <FaInstagram className='text-rose-600 text-xl' />
                    < BiLogoFacebook className='text-blue-800 text-xl' />
                    <AiFillLinkedin className='text-blue-700 text-xl' />
                    <AiOutlineTwitter className='text-blue-600 text-xl' />
                    <AiFillYoutube className='text-rose-500 text-xl' />
                </span>
                <span>تمام حقوق مادی  و معنوی محفوظ است</span>
            </div>
        </>
    )
}
