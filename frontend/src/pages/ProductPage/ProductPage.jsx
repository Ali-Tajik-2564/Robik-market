import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ProductPage() {
    return (
        <div>
            <div className=' w-full h-38 flex flex-col justify-start items-end p-10  bg-stone-100 space-y-4'>
                <h3 className="text-3xl font-bold">گوشی موبایل سامسونگ مدل Galaxy A21s</h3>
                <p className='text-sm font-semibold'>دارای قابلیت دو سیم کارته و حافظه 128 گیگابایت</p>
                <div className='flex flex-row-reverse gap-2 text-sm font-semibold '>
                    <Link to="/" >خانه</Link>
                    /
                    <Link >فروشگاه</Link>
                    /
                    <Link >گوشی موبایل سامسونگ مدل Galaxy A21s</Link>
                </div>

            </div>
            <div className='w-full h-70 p-8 my-5 flex flex-row-reverse'>

                <div className="w-1/3 h-full" >
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="../images/phone1.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="../images/phone2.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="../images/phone3.webp" alt="" /></SwiperSlide>

                    </Swiper>

                </div>
                <div className='w-[60%] flex flex-col items-end justify-start space-y-3 mx-3 h-2/4 p-3 '>
                    <h3 className="text-3xl font-bold">گوشی موبایل سامسونگ مدل Galaxy A21s</h3>
                    <span className='space-x-1 flex '>
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarHalf className="text-yellow-400" />
                        <p className='text-sm font-medium'>(نقد و بررسی)</p>
                    </span>
                    <span className="text-2xl font-bold text-yellow-400  flex flex-row-reverse "> 3.500.000  <span className='text-xl mx-1'>  تومان </span></span>
                    <p className="text-right font-medium h-26 border-b-4 border-opacity-50   border-gray-300 rounded-sm p-2">این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.
                        صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید.

                    </p>



                    <div className='flex flex-col items-end justify-start space-y-2 mx3 p-3 w-full '>
                        <h2 className='text-xl'>گزینه های موجود:</h2>
                        <table className='block  ' >
                            <thead className=''>
                                <tr className='text-lg font-semibold space-x- space-y-3 w-2/3 text-center m-2'>
                                    <td>تعداد</td>
                                    <td>گارانتی</td>
                                    <td>رنگ</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-lg font-medium'>
                                    <td></td>
                                    <td className='w-16 h12 bg-slate-100 border-none target:border-gray-100 ' >
                                        <select name="garanty" id="">
                                            <option value="بدون گارانتی">بدون گارانتی</option>
                                            <option value="۶ماه">۶ماه</option>
                                            <option value="۱ سال">۱ سال</option>
                                            <option value="۲ سال">۲ سال</option>
                                        </select>
                                    </td>
                                    <td className='space-x-2'>
                                        <input type="text" className='w-6 h-6 bg-red-600 rounded-xl'  ></input>
                                        <input type="text" className='w-6 h-6 bg-blue-600 rounded-xl'  ></input>
                                        <input type="text" className='w-6 h-6 bg-black rounded-xl'  ></input>
                                        <input type="text" className='w-6 h-6 bg-yellow-500 rounded-xl'  ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>   </div>
                </div>  </div>
        </div >
    )
}
