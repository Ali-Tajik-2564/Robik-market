import React from 'react'

export default function CmsTopBar() {
    return (
        <div className='w-full h-auto  sticky top-0 flex flex-row-reverse items-center justify-between px-4 p-3 mb-4'>
            <div className='flex flex-row-reverse items-center justify-center gap-3'>
                <img src=".././images/profile-1.png" className='w-14 h-14 rounded-full shadow-sm' alt="" />
                <span className="flex flex-col items-center ">
                    <h2 className="text-lg font-semibold text-mainPrimary">علی تاجیک</h2>
                    <p className="text-base font-medium text-mainPrimaryLight">مدیر</p>
                </span>
            </div>


        </div>
    )
}
