import React from 'react'
import { Datepicker, Input, initTE, Collapse, } from "tw-elements";
import SideProductBox from '../ProductBox/SideProductBox';
initTE({ Datepicker, Input, Collapse }, { allowReinits: true });
export default function NewProductsAccording({ title }) {

    return (
        <div className='w-full'>
            <div
                class="rounded-t-lg border border-neutral-200 bg-primaryText shadow-sm shadow-shadowPrimary dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="mb-0" id="headingTwo">
                    <button
                        class="group relative flex justify-between flex-row-reverse   w-full items-center rounded-t-[15px] text-mainPrimaryLight border-0 bg-white px-4 py-3 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        <span className='ml-auto  '>
                            {title}

                        </span>
                        <span
                            class=" h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    class="!visible"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingTwo"
                    data-te-parent="#accordionExample">
                    <div class="px-2 py-3">
                        <div className='border-b-2 border-shadowPrimary my-1'>

                            <SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" /></div>
                        <div className='border-b-2 border-shadowPrimary my-2'><SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" /></div>
                        <div className='border-b-2 border-shadowPrimary my-2'><SideProductBox img="side-product.jpg" title="گوشی موبایل سامسونگ مدل دو سیم کارته  120 گیگ" price="۶.۵۰۰.۰۰۰" /></div>




                    </div>
                </div>
            </div>
        </div>
    )
}
