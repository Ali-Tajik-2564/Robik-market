import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
export default function Footer() {
    return (
        <>
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
                    <span className='text-lg font-bold flex flex-row-reverse '> <img src="../images/logo.png" alt="" /> روبیک مارکت</span>

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
