import React from 'react'
import { Link } from 'react-router-dom'
import SideProductBox from '../../component/ProductBox/SideProductBox'
import SideArticelBox from '../../component/ArticleBox/SideArticelBox'
export default function ArticlePage() {
    return (
        <div>
            <div className=' w-full h-38 flex flex-col justify-start items-end p-10 pb-14 bg-stone-100 space-y-4'>
                <h3 className="text-3xl font-bold">گلکسی S21 اولترا 5g</h3>
                <p className='text-sm font-semibold'>سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</p>

                <div className='flex flex-row-reverse gap-2 text-sm font-semibold '>
                    <Link to="/" >خانه</Link>
                    /
                    <Link >بلاگ آموزشی</Link>
                    /
                    <Link >آموزش وردپرس</Link>
                </div>

            </div>
            <div className="w-full flex  flex-row-reverse p-6 mx-4">
                <div className="w-3/4">

                </div>
                <div className="w-1/4 px-2">
                    <div className=' space-y-2 p-2 '>
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                        <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" />
                    </div>
                    <div>
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />
                        <SideArticelBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" subtitle="گوشی جدید سامسونگ رونمایی شد s22" />

                    </div>
                </div>
            </div>
        </div >
    )
}
