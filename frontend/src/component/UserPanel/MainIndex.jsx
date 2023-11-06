import React from 'react'

export default function MainIndex() {
    return (
        <div className='text-right mx-2 p-2'>

            <div className="personal-info">
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-2">اطلاعات شخصی</h1>

                <div className='w-full  flex flex-row-reverse  flex-wrap justify-start items-start gap-5'>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">نام و نام خانوادگی</h2>
                        <p className="text-sm font-thin">مصطفی کلانتری</p>
                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">کدملی</h2>
                        <p className="text-sm font-thin">1234567890</p>
                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">شماره تلفن همراه</h2>
                        <p className="text-sm font-thin">09351234567</p>
                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">پست الکترونیک</h2>
                        <p className="text-sm font-thin">email@website.com</p>
                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">شماره کارت جهت مرجوع وجه</h2>
                        <p className="text-sm font-thin">1234-4321-1234-4321</p>
                    </span>
                    <span className='flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">رمز عبور</h2>
                        <p className="text-sm font-thin">256400</p>
                    </span>

                </div>

            </div>
            <div className="last-orders mt-5 ">
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-2">اخرین سفارشات</h1>
                <div className="flex item-center justify-center  gap-x-2">
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
    )
}
