import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import Title from '../../component/Title/Title';
import ProductBox from '../../component/ProductBox/ProductBox';
import Comments from '../../component/Comments/Comments';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
export default function ProductPage() {
    return (
        <div>
            <div className=' w-full h-38 flex flex-col justify-start items-end p-10  bg-stone-100 space-y-4'>
                <h3 className="text-3xl font-bold">گوشی موبایل سامسونگ مدل Galaxy A21s</h3>
                <p className='text-sm font-semibold'>دارای قابلیت دو سیم کارته و حافظه 128 گیگابایت</p>
                <div className='flex flex-row-reverse gap-2 text-sm font-semibold '>
                    <Link to="/" >خانه</Link>
                    /
                    <Link >فروشگاه</Link>
                    /
                    <Link >گوشی موبایل سامسونگ مدل Galaxy A21s</Link>
                </div>

            </div>
            <div className='w-full h-70 p-8 my-5 flex flex-row-reverse'>

                <div className="w-1/3 h-full" >
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"

                    >
                        <SwiperSlide><img src="../images/phone1.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="../images/phone2.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="../images/phone3.webp" alt="" /></SwiperSlide>

                    </Swiper>

                </div>
                <div className='w-[60%] flex flex-col items-end justify-start space-y-3 mx-3 h-2/4 p-3 '>
                    <h3 className="text-3xl font-bold">گوشی موبایل سامسونگ مدل Galaxy A21s</h3>
                    <span className='space-x-1 flex '>
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarHalf className="text-yellow-400" />
                        <p className='text-sm font-medium'>(نقد و بررسی)</p>
                    </span>
                    <span className="text-2xl font-bold text-yellow-400  flex flex-row-reverse "> 3.500.000  <span className='text-xl mx-1'>  تومان </span></span>
                    <p className="text-right font-medium h-26 border-b-4 border-opacity-50   border-gray-300 rounded-sm p-2">این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.
                        صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید.

                    </p>



                    <div className='flex flex-col items-end justify-start space-y-2 mx3 p-3 w-full '>
                        <h2 className='text-xl'>گزینه های موجود:</h2>
                        <table className='w-[60%]' >
                            <thead className='   '>
                                <tr className='text-center'>
                                    <td>تعداد</td>
                                    <td>گارانتی</td>
                                    <td>رنگ</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td>
                                        <input type="number" className='w-10 h-10 border border-gray-300 text-center rounded-sm' />
                                    </td>
                                    <td  >
                                        <select name="garanty" id="" className=' border border-gray-300 text-center rounded-sm w-18 h-8'>
                                            <option value="بدون گارانتی">بدون گارانتی</option>
                                            <option value="۶ماه">۶ماه</option>
                                            <option value="۱ سال">۱ سال</option>
                                            <option value="۲ سال">۲ سال</option>
                                        </select>
                                    </td>
                                    <td className='space-x-1'>
                                        <input type="text" className='w-6 h-6 bg-red-600 rounded-xl cursor-pointer focus:scale-110 focus:border-gray-200 focus:border-2'   ></input>
                                        <input type="text" className='w-6 h-6 bg-blue-600 rounded-xl cursor-pointer focus:scale-110 focus:border-gray-200 focus:border-2'   ></input>
                                        <input type="text" className='w-6 h-6 bg-black rounded-xl cursor-pointer focus:scale-110 focus:border-gray-200 focus:border-2'   ></input>
                                        <input type="text" className='w-6 h-6 bg-yellow-500 rounded-xl cursor-pointer focus:scale-110 focus:border-gray-200 focus:border-2'   ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className=' flex flex-row-reverse  justify-center items-center text-lg font-semibold text-white rounded-lg w-52 h-12 bg-gray-600 mt-4 p-2 hover:bg-slate-500 transition-all duration-500 ease-in'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>  </div>

            <div className="w-[80%] mx-auto my-12 ">
                <Tabs
                    id="uncontrolled-tab-example"
                    className="mb-4  "
                    dir='rtl'
                    bordered="true"
                    defaultActiveKey="نقد و بررسی"
                >
                    <Tab eventKey="نقد و بررسی" title="نقد و بررسی" tabClassName='text-gray-400 text-lg font-semibold ' >
                        <p className=' w-full text-lg p-2 text-right font-medium space-x-2 '>
                            {/* {props.desc} */}
                            این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.

                            صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند.

                            بنابراین نگران ویرایش و بروزرسانی محتوای این نوع صفحات نباشید. شما می‌توانید به سادگی و تنها با چند کلیک وارد ناحیه مدیریت وب‌سایت خود شده و مطلب مربوطه را ویرایش کنید.

                            این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید. صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند.
                        </p>
                    </Tab>
                    <Tab eventKey="جدول مشخصات" tabClassName='text-gray-400 text-lg font-semibold ' title="جدول مشخصات">
                        <div>
                            <h2 className="text-lg text-right flex flex-row-reverse font-semibold items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 font-semibold">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>

                                مشخصات کلی
                            </h2>
                            <Table dir='rtl' className='block ' borderless  >
                                <tbody>
                                    <tr className=' border-b-2 border-gray-400 rounded-md  '>
                                        <td className='  rounded-lg  font-semibold w-1/3'>طول</td>
                                        <td className='  rounded-lg  font-semibold'>32 سانتی متر</td>

                                    </tr>
                                    <tr className=' border-b-2 border-gray-400 rounded-md '>
                                        <td className='  rounded-lg  font-semibold w-1/3'>عرض</td>
                                        <td className='  rounded-lg  font-semibold'>15 سانتی متر</td>

                                    </tr>
                                    <tr className=' border-b-2 border-gray-400 rounded-md '>
                                        <td className=' rounded-lg  font-semibold w-1/3'>ارتفاع</td>

                                        <td className='  rounded-lg  font-semibold'>25 سانتی متر</td>

                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                        <div>
                            <h2 className="text-lg text-right flex flex-row-reverse font-semibold items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 font-semibold">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>

                                صفحه نمایش
                            </h2>
                            <Table dir='rtl' className='block m-2 ' borderless  >
                                <tbody>
                                    <tr className=' border-b-2 border-gray-400 rounded-md  '>
                                        <td className='  rounded-lg  font-semibold w-1/3'>صفحه نمایش رنگی</td>
                                        <td className='  rounded-lg  font-semibold'>بله</td>

                                    </tr>
                                    <tr className=' border-b-2 border-gray-400 rounded-md '>
                                        <td className='  rounded-lg  font-semibold w-1/3'>صفحه نمایش لمسی</td>
                                        <td className='  rounded-lg  font-semibold'>بله</td>

                                    </tr>
                                    <tr className=' border-b-2 border-gray-400 rounded-md '>
                                        <td className=' rounded-lg  font-semibold w-1/3'>بازه‌ی اندازه صفحه نمایش</td>

                                        <td className='  rounded-lg  font-semibold'>
                                            6.0 اینچ و بزرگتر</td>

                                    </tr>
                                    <tr className=' border-b-2 border-gray-400 rounded-md '>
                                        <td className=' rounded-lg  font-semibold w-1/3'>نسبت صفحه‌نمایش به بدنه</td>

                                        <td className='  rounded-lg  font-semibold'>
                                            87.4 درصد</td>

                                    </tr>

                                </tbody>
                            </Table>
                        </div>

                    </Tab >
                    <Tab eventKey="دیدگاه کاربران" tabClassName='text-gray-400 text-lg font-semibold ' title="دیدگاه کاربران" >
                        <Comments />
                    </Tab>
                </Tabs >
            </div>
            <div className="w-full">
                <Title title="محصولات مرتبط" subTitle="" />
                <div className="" >
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}

                        direction='horizontal'
                        pagination={{
                            clickable: true,
                            progressbarOpposite: "true"
                        }}

                        rev='true'
                        modules={[FreeMode, Pagination,]}
                        className="mySwiper">
                        <SwiperSlide >

                            <Link to="/products/3" className='decoration-0 list-none'>
                                <ProductBox img={"/slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                    <p className='product-info'>
                                        <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                                        <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                                            <BsStarFill className="text-yellow-400" />
                                            <BsStarFill className="text-yellow-400" />
                                            <BsStarFill className="text-yellow-400" />
                                            <BsStarFill className="text-yellow-400" />

                                            <BsStarHalf className="text-yellow-400" />

                                        </span >


                                    </p>
                                </ProductBox>
                            </Link></SwiperSlide>

                        <SwiperSlide ><Link to="/products/3" className='decoration-0 list-none'>
                            <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                <p className='product-info'>
                                    <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                                    <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />

                                        <BsStarHalf className="text-yellow-400" />

                                    </span >


                                </p>
                            </ProductBox>
                        </Link></SwiperSlide>

                        <SwiperSlide ><Link to="/products/3" className='decoration-0 list-none'>
                            <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                <p className='product-info'>
                                    <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                                    <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />

                                        <BsStarHalf className="text-yellow-400" />

                                    </span >


                                </p>
                            </ProductBox>
                        </Link></SwiperSlide>

                        <SwiperSlide ><Link to="/products/3" className='decoration-0 list-none'>
                            <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                <p className='product-info'>
                                    <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                                    <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />

                                        <BsStarHalf className="text-yellow-400" />

                                    </span >


                                </p>
                            </ProductBox>
                        </Link></SwiperSlide>

                        <SwiperSlide ><Link to="/products/3" className='decoration-0 list-none'>
                            <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"} route="گوشی موبایل  /  سامسونگ" >

                                <p className='product-info'>
                                    <span className='product-info-item text-yellow-400'>6.000.000 تومان</span>
                                    <span className='product-info-item flex justify-end'> (۱۲ رای دهنده)
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />
                                        <BsStarFill className="text-yellow-400" />

                                        <BsStarHalf className="text-yellow-400" />

                                    </span >


                                </p>
                            </ProductBox>
                        </Link></SwiperSlide>

                        ...
                    </Swiper>
                </div>
            </div>
        </div >
    )
}
