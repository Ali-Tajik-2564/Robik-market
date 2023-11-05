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

        </div>
    )
}
