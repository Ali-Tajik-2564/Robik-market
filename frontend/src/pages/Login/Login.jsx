import React from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='w-full  '>
            <HeaderPage title="ورود به ناحیه کاربری" subtitle="وارد ناحیه کاربری خود در روبیک مارکت شوید." route="خانه" />
            <div className=" container p-3 w-full h-auto flex flex-row-reverse items-center gap-x-4 justify-between">
                <img src="./images/login.jpg" alt="" className='lg:w-1/2 w-full lg:block hidden h-full object-cover text-center  m-3 bg-none' />
                <div className="w-full lg:w-1/2   my-10 flex-col text-right items-center space-y-4">
                    <h1 className='text-2xl font-semibold  text-mainPrimary  '>وارد شوید</h1>
                    <p className="text-base lg:text-lg font-medium text-mainPrimaryLight">با ورود به ناحیه کاربری خود از همه امکانات سایت بهره مند شوید.     </p>


                    <div>
                        <label htmlFor="email" className='text-lg font-thin text-mainPrimaryLight'> : پست الکترونیک </label>
                        <input type="email" name="email" id="email" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none focus:shadow-emerald-600 focus:shadow-lg m-1' />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> :رمز عبور </label>
                        <input type="text" name="password" id="password" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none focus:shadow-emerald-600 focus:shadow-lg m-1' />
                    </div>
                    <button className="text-lg font-medium mt-4 py-2 px-5 rounded-md bg-mainPrimaryLight text-primaryText hover:bg-mainPrimaryLight/90">ورود</button>
                    <p className="text-lg font-medium text-mainPrimaryLight">   ثبت نام نکردید؟ برو به صفحه  <Link to="/register" className='text-mainPrimary text-xl font-bold'> ثبت نام</Link></p>
                </div>
            </div>

        </div>
    )
}
