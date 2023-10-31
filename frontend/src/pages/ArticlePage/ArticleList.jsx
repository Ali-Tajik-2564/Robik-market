import React, { useState } from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
import ArticleBox from '../../component/ArticleBox/ArticleBox'
import AOS from "aos"
import "aos/dist/aos.css"
export default function ArticleList() {
    AOS.init()
    return (
        <div className=' bg-primaryText h-auto '>
            <HeaderPage title="بلاگ" subtitle="بلاگ آموزشی روبیک مارکت" route="خانه" />
            <div className='  mx-auto flex flex-col lg:flex-row-reverse justify-between items-start p-4   '>

                <div className="w-full  h-full flex flex-col mx-2 items-start  gap-y-5  ">
                    <div className="w-full px-2 flex flex-row-reverse items-start py-2 justify-between border-b-2 border-mainPrimaryLight/50 ">
                        <span className='text-lg font-medium text-mainPrimaryLight'>
                            تعداد مقاله های  موجود : 10
                        </span>

                    </div>
                    <div className="w-full flex  items-center justify-center lg:flex-nowrap flex-wrap mx-2 gap-4">
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                        <Link to="/articles/3" data-aos="fade-up" data-aos-duration="1000">
                            <ArticleBox title="گلکسی S21 اولترا 5g" img="article-1.jpg" date="ارسال شده در ۳۰ خرداد ۱۴۰۰" >
                                <p className="text-center font-thin m-2">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                            </ArticleBox>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
