import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../HeaderPage/HeaderPage'
import Card from 'react-bootstrap/Card';
export default function BasketFactor() {
    return (
        <div className="bg-shadowPrimary">
            <HeaderPage title="پیش فاکتور" subtitle="با تکیمل پرداخت فاکتور، خرید خود را تکمیل کنید." route="خانه" />
            <div className=" flex xl:flex-row flex-col-reverse w-[95%] mt-4 mx-auto p-3 items-start     gap-x-3">
                <div className="w-full xl:w-1/4 flex flex-col items-center bg-primaryText  shadow-sm   border border-gray-50 rounded-sm p-2 space-y-4 ">
                    <div className="w-full border-b border-b-gray-300 p-2">
                        <div className='flex w-full m-2 flex-row-reverse justify-between text-lg rounded-sm font-bold p-3'>
                            <span> : جمع کل فاکتور</span>
                            <span>3.200.000 تومان</span>
                        </div>
                        <div className='flex w-full m-2 flex-row-reverse justify-between text-lg  bg-gray-100  font-bold p-3'>
                            <span> : جمع تخفیف</span>
                            <span>200.000 تومان</span>
                        </div>
                        <div className='flex w-full m-2 flex-row-reverse justify-between text-lg rounded-sm font-bold p-3'>
                            <span> : هزینه ارسال</span>
                            <span>32.000 تومان</span>
                        </div>
                        <div className='flex w-full m-2 flex-row-reverse justify-between text-lg rounded-sm text-green-600 font-bold p-3'>
                            <span> : مبلغ قابل پرداخت </span>
                            <span>3.000.000 تومان</span>
                        </div>
                    </div>
                    <div className='w-full p-2'>
                        <h3 className='text-lg font-semibold text-right mb-1'>انتخاب نحوه پرداخت</h3>
                        <div className='w-full flex flex-row gap-x-3 justify-end items-center m-1 text-lg font-medium '>
                            پرداخت انلاین
                            <input type="radio" name="2" className="w-4 h-4 bg-slate-200 checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />
                        </div>
                        <div className='w-full flex flex-row gap-x-3 justify-end items-center m-1 text-lg font-medium '>
                            ثبت فیش پرداخت/کارت به کارت
                            <input type="radio" name="2" className="w-4 h-4 bg-slate-200 checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />

                        </div>
                        <div className='text-lg font-semibold flex justify-end items-center gap-x-1'>
                            <p>
                                <span className='text-yellow-600'>        قوانین و مقررات  </span> را خواندم و قبول دارم</p>
                            <input type="checkbox" name="" id="1" className='w-4 h-4 ' />
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button className='w-[80%] p-2 mx-auto my-3 bg-green-700 text-white font-bold text-xl rounded-lg hover:bg-green-800 transition-colors duration-300' > <Link to="/factor" >  ادامه ثبت سفارش </Link></button>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-3/4    space-y-4 ">
                    <div className="w-full border rounded-sm p-4 space-y-3 bg-primaryText  shadow-sm">
                        <h2 className='text-xl font-bold text-mainPrimary text-right '>آدرس تحویل سفارش</h2>
                        <div className='flex justify-evenly flex-col md:flex-row-reverse items-center'>
                            <div className="w-full md:w-3/4 p-3 border border-slate-100 rounded-lg space-y-2 " >
                                <h3 className=" w-full text-right text-base md:text-lg line-clamp-1 font-semibold">فارس، شیراز، بلوار آزادگان، کارخانه نوآوری شیراز،</h3>
                                <span className='w-full text-sm md:text-base font-medium flex flex-row-reverse items-center justify-between'>
                                    <p>
                                        کدپستی: 1234567890
                                    </p>
                                    <p>
                                        تحویل گیرنده: مصطفی | 09351234567
                                    </p>
                                </span>
                            </div>
                            <div className=' w-full md:w-1/4'>
                                <button className=' w-[90%] h-14 p-2 m-2 border border-zinc-700 rounded-lg text-center transition-colors duration-100 hover:text-white hover:bg-zinc-700'> <Link>  افزودن ادرس جدید </Link> </button>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-full border rounded-sm p-3 space-y-3 bg-primaryText  shadow-sm'>
                        <h2 className='text-xl font-bold text-mainPrimary text-right '>سفارشات شما</h2>
                        <div className="w-full max-h-[50rem] flex flex-row-reverse flex-wrap justify-center    p-1  overflow-y-auto">

                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>

                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>

                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>

                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>
                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>
                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>
                            <div className=" w-64 h-96 bg-primaryText  rounded-sm shadow-shadowPrimary shadow-sm my-3 mx-3">
                                <img src={`.././images/phone1.webp`} alt="" className='w-full overflow-hidden rounded-sm h-[50%]' />
                                <h2 className="w-full text-lg text-right font-semibold text-mainPrimary line-clamp-2 p-1 mt-4">
                                    گوشی موبایل سامسونگ مدل Galaxy A21s
                                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت"
                                </h2>
                                <div className='w-full flex flex-row-reverse justify-between items-center p-2 mt-5 '>
                                    <span className='flex gap-x-1 text-base items-center'>
                                        <p className='text-mainPrimaryLight'>تعداد</p>
                                        <input type="text" disabled className='w-6 h-6 p-1 bg-shadowPrimary text-mainPrimaryLight rounded-sm text-center ' placeholder='2' />


                                    </span>
                                    <span className='flex  gap-x-1 text-mainPrimaryLight text-base'>
                                        <p>تومان</p>
                                        <p>6.000.000</p>
                                    </span>

                                </div>

                            </div>





                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
