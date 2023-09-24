import React from 'react'
import { Link } from 'react-router-dom'
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
            <div className="w-full flex px-4 py-2">
                <div className="w-3/4">

                </div>
                <div className="w-1/4"></div>
            </div>
        </div >
    )
}
