import React, { useState } from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import CategoryFilter from '../../component/CategoryFilter/CategoryFilter'
import NewProductsAccording from '../../component/newProductsAccording/newProductsAccording'
import { Link } from 'react-router-dom'
import ProductBox from "./../../component/ProductBox/ProductBox"
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"

export default function Market() {
    const [category, setCategory] = useState("")
    const [gridItem, setGridItem] = useState("chart")
    return (
        <div className=' bg-primaryText h-[100%] '>
            <HeaderPage title="فروشگاه روبیک مارکت" subtitle="هر آنچه نیاز دارید در این فروشگاه موجود است" route="خانه" />
            <div className=' container mx-auto flex flex-row-reverse justify-between items-start p-4   '>
                <div className="w-1/4 h-full flex flex-col justify-start gap-y-5  ">
                    <CategoryFilter title="گروه های محصولات" categories={["گوشی موبایل", "جانبی موبایل", "دوربین دیجیتال", "ساعت هوشمند", "لپ تاپ"]} setCategoryValue={setCategory} />
                    <div className="w-full flex gap-x-5 items-center justify-end p-2 rounded-sm text-mainPrimaryLight bg-primaryText">
                        <span>فقط کالا های موجود</span>
                        <input type="checkbox" name="inbox" className="w-4 h-4 bg-shadowPrimary checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />

                    </div>
                    <div className="w-full flex gap-x-5 items-center justify-end p-2 rounded-sm text-mainPrimaryLight bg-primaryText">
                        <span>فقط کالاهای دارای گارانتی</span>
                        <input type="checkbox" name="garenty" className="w-4 h-4 bg-shadowPrimary checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />

                    </div>
                    <NewProductsAccording title="جدید ترین محصولات" />
                </div>
                <div className="w-3/4 h-full flex flex-col mx-2 items-start  gap-y-5  ">
                    <div className="w-full px-2 flex flex-row-reverse items-start py-2 justify-between border-b-2 border-mainPrimaryLight/50 ">
                        <span className='text-lg font-medium text-mainPrimaryLight'>
                            تعداد کالای موجود : 200
                        </span>
                        <div className='flex items-center justify-center gap-x-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setGridItem("grid")} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 p-1 rounded-lg transition-all text-mainPrimaryLight  ${gridItem === "grid" ? "bg-mainPrimaryLight text-primaryText" : "hover:text-mainPrimary"} cursor-pointer`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setGridItem("chart")} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 p-1 rounded-lg transition-all text-mainPrimaryLight  ${gridItem === "chart" ? "bg-mainPrimaryLight text-primaryText" : "hover:text-mainPrimary"}  cursor-pointer`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                        </div>
                    </div>
                    {gridItem === "chart" && (
                        <div className="w-full grid grid-cols-3 grid-rows-4  mx-2 gap-2">
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>  <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info '>
                                        <span className='product-info-item text-mainPrimaryLight'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end  gap-x-2'>
                                            <span>(۱۲ رای دهنده) </span>
                                            <span className='flex'>
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />
                                                <BsStarFill className="text-mainPrimaryLight" />

                                                <BsStarHalf className="text-mainPrimaryLight" />
                                            </span>
                                        </span >


                                    </p>
                                </ProductBox>
                            </Link>
                        </div>
                    )}
                    {
                        gridItem === "grid" && (
                            <div className="w-full mx-2 flex flex-col items-center justify-start gap-y-4"></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
