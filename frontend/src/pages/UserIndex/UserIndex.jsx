import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import {
    Collapse,
    initTE,
} from "tw-elements";

initTE({ Collapse });
export default function UserIndex() {
    return (
        <div>
            <HeaderPage title="ناحیه کاربری" subtitle="به ناحیه کاربری روبیک مارکت خوش آمدید." route="خانه" />

            <div className='W-full py-5 px-3 flex justify-center items-start lg:flex-row-reverse flex-col gap-5'>
                <div className="w-full lg:w-1/4">

                    <div
                        class="rounded-t-sm border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 class="mb-0" id="headingOne5">
                            <button
                                class="group  relative flex    w-full items-center justify-between rounded-t-[15px] border-0 bg-white px-3 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                type="button"
                                data-te-collapse-init
                                data-te-target="#collapseOne5"
                                aria-expanded="true"
                                aria-controls="collapseOne5">
                                <span
                                    class="-mr-1  h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                                <div className='flex item-center justify-center flex-row-reverse gap-x-3'>
                                    <img src="./../images/profile-1.png" alt="" className='w-10 h-10 mx-1 rounded-full object-cover' />
                                    <span className='flex flex-col items-center justify-center'>
                                        <h2 className='text-lg font-semibold text-mainPrimary'>مصطفی کلانتری</h2>
                                        <p className='text-xs font-thin text-mainPrimaryLight'>09195729509</p>
                                    </span>
                                </div>
                            </button>
                        </h2>
                        <div
                            id="collapseOne5"
                            class="!visible"
                            data-te-collapse-item
                            data-te-collapse-show
                            aria-labelledby="headingOne5">
                            <div class=" px-3 py-3 flex flex-col items-end justify-end mx-3 gap-y-3">
                                <Link to="" >
                                    <span className="flex flex-row items-center justify-e nd gap-x-2 ">
                                        <p className="text-base font-light hover:text-mainPrimaryLight">اطلاعات حساب کاربری</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-mainPrimary">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>


                                    </span>
                                </Link>
                                <Link to="my-address" >
                                    <span className="flex flex-row items-center justify-end gap-x-2  ">
                                        <p className="text-base font-light hover:text-mainPrimaryLight">ادرس من</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-mainPrimary">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>



                                    </span>
                                </Link>
                                <Link to="edit-account" >
                                    <span className="flex flex-row items-center justify-end gap-x-2 " >
                                        <p className="text-base font-light hover:text-mainPrimaryLight">ویرایش اطلاعات</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-mainPrimary">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>



                                    </span>
                                </Link>
                                <Link to="/" >
                                    <span className="flex flex-row items-center justify-end gap-x-2  mt-2" >
                                        <p className="text-base font-light hover:text-mainPrimaryLight">خروج از حساب</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-mainPrimary rotate-180">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>




                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
