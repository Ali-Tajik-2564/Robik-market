import React from 'react'
import { Link } from 'react-router-dom'
import SideProductBox from '../../component/ProductBox/SideProductBox'
import SideArticelBox from '../../component/ArticleBox/SideArticelBox'
import Comments from "../../component/Comments/Comments"
import HeaderPage from '../../component/HeaderPage/HeaderPage'
export default function ArticlePage() {
    return (
        <div>
            <HeaderPage title="گلکسی S21 اولترا 5g" subtitle="سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد." route="خانه" />
            <div className="w-[95%] flex  flex-row-reverse p-6 mx-auto ">
                <div className="w-full xl:w-3/4 xl:mx-2 mx-auto p-2 border-b-2 border-gray-300">
                    <span className='w-full m-1 flex flex-row-reverse pb-3 justify-between items-center border-b-2 border-black rounded-sm '>
                        <h3 className="w-full text-base xm:text-lg md:text-2xl font-bold text-right  ">آموزش نصب قالب وردپرسی روبیک مارکت</h3>
                        <p className='text-xs md:text-sm font-semibold w-1/2 '>ارسال شده در 22 تیر 1400</p>
                    </span>

                    <img src="../images/side-product.jpg" alt="" className="w-[70%] mx-auto my-4 rounded-lg" />

                    <div className='text-lg font-md space-y-2 text-right  px-3'>
                        <p>   این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.</p>


                        <p>   صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند.

                            بنابراین نگران ویرایش و بروزرسانی محتوای این نوع صفحات نباشید. شما می‌توانید به سادگی و تنها با چند کلیک وارد ناحیه مدیریت وب‌سایت خود شده و مطلب مربوطه را ویرایش کنید.</p>

                        <p>   این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید. بنابراین نگران ویرایش و بروزرسانی محتوای این نوع صفحات نباشید. شما می‌توانید به سادگی و تنها با چند کلیک وارد ناحیه مدیریت وب‌سایت خود شده و مطلب مربوطه را ویرایش کنید.

                            این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.</p>
                    </div>


                </div>
                <div className="w-1/4 px-2 xl:block hidden">
                    <h3 className="w-full text-xl font-bold text-right pb-3 border-b-2 border-black rounded-sm m-2">پربازدیدترین محصولات</h3>
                    <div className=' space-y-2 p-2 '>
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                    </div>
                    <h3 className="w-full text-xl font-bold text-right pb-3 border-b-2 border-black rounded-sm m-2">پربازدیدترین مطالب</h3>

                    <div>
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />

                    </div>
                </div>
            </div>
            <div className='mt-2 w-[70%] ml-auto text-right space-y-2 mr-28'>
                <h2 className="text-xl font-bold text-yellow-500">نظرات کاربران</h2>
                <Comments />
            </div>
        </div >
    )
}
