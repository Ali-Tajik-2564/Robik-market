import React from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div className='w-full  '>
            <HeaderPage title="عضویت در سایت" subtitle="با عضویت در سایت از همه امکانات روبیک مارکت بهره مند شوید." route="خانه" />
            <div className="container p-4 my-10 w-full h-auto flex flex-row-reverse items-center gap-x-4 justify-between">
                <img src="./images/register.png" alt="" className='w-1/2 hidden md:block h-full object-cover text-center  m-3 bg-none' />
                <div className=" w-full md:w-1/2    flex-col text-right items-center space-y-4">
                    <h1 className='text-2xl font-semibold  text-mainPrimary  '>عضویت در روبیک مارکت</h1>
                    <p className="text-lg font-medium text-mainPrimaryLight">با عضویت در سایت از همه امکانات سایت بهره مند شوید.</p>
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> : نام و نام خانوادگی</label>
                        <input type="text" dir='rtl' name="name" id="name" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none focus:shadow-emerald-600 focus:shadow-lg m-1' />
                    </div>
                    <div>
                        <label htmlFor="email" className='text-lg font-thin text-mainPrimaryLight'> : پست الکترونیک </label>
                        <input type="email" name="email" id="email" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none focus:shadow-emerald-600 focus:shadow-lg m-1' />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> :رمز عبور </label>
                        <input type="text" name="password" id="password" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none focus:shadow-emerald-600 focus:shadow-lg m-1' />
                    </div>
                    <button className="text-lg font-medium mt-4 py-2 px-5 rounded-md bg-mainPrimaryLight text-primaryText hover:bg-mainPrimaryLight/90">ثبت نام</button>
                    <p className="text-lg font-medium text-mainPrimaryLight">   ثبت نام کردید؟ برو به صفحه  <Link to="/login" className='text-mainPrimary font-bold text-xl'> ورود</Link></p>
                </div>
            </div>

        </div>
    )
}
