import React from 'react'

export default function UserAddress() {
    return (
        <div className='user-address mb-5'>
            <h1 className="text-xl text-right font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-2">ادرس من</h1>
            <div className="w-full grid grid-rows-4 md:grid-rows-2  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                    <h2 className="text-lg text-mainPrimary"> : ادرس</h2>
                    <p className="text-sm text-mainPrimaryLight">فارس، شیراز، بلوار آزادگان، کارخانه نوآوری شیراز،</p>
                </span>
                <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                    <h2 className="text-lg text-mainPrimary"> : تحویل گیرنده</h2>
                    <p className="text-sm text-mainPrimaryLight">مصطفی کلانتری</p>
                </span>
                <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                    <h2 className="text-lg text-mainPrimary"> :شماره تلفن</h2>
                    <p className="text-sm text-mainPrimaryLight">09195729509</p>
                </span>
                <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                    <h2 className="text-lg text-mainPrimary"> : کد پستی</h2>
                    <p className="text-sm text-mainPrimaryLight">1234567890</p>
                </span>
            </div>

        </div>
    )
}
