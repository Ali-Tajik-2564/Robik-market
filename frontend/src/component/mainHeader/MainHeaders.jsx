import React, { useEffect, useState } from 'react'
import "./MainHeaders.css"
import { HiShoppingCart } from "react-icons/hi"
import { BiSearch, BiShoppingBag, BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { RxCross2 } from "react-icons/Rx"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegAddressCard } from "react-icons/fa"
export default function MainHeaders() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="top px-2 md:px-10 m-0 gap-x-2 md:gap-x-4 py-3 text-xs md:text-base font-thin md:font-normal w-full inset-0  child:h-8 child:md:h-12">
                <div className="logo">
                    <span className='logo-title hidden  lg:block'>روبیک مارکت</span>
                    <img src="../images/logo.png" alt="logo" className='logo-img child:h-8 child:md:h-12' />
                </div>

                <div className="search-box px-1 ml-2 md:ml-12">
                    <input type="text" className="search-box__input  text-mainPrimary " placeholder='جستجو کنید ...' dir='rtl' />
                    <BiSearch className=' w-4 h-4 search-box__icon text-gray-400 rotate-90 text-xl  ' />
                </div>

                <span className='register flex gap-x-2 items-center justify-center'>
                    <Link to="/login" >
                        ورود
                    </Link>
                    <span className='text-2xl pt-2 font-bold'>
                        /
                    </span>
                    <Link to="/register">ثبت نام</Link>
                </span>

                <button className='basket  '>
                    <Link to="/user-basket" className='w-full  text-base md:text-lg marker: flex items-center justify-center gap-x-2'>
                        <span>(۲)</span>
                        <span className='  hidden  lg:block '>سبد خرید </span>
                        <HiShoppingCart className='basket-icon' />
                    </Link>
                </button>


            </div>
            <div className="bottom">
                <ul className="access-bar flex flex-row-reverse lg:justify-start justify-between items-center space-x-3 child:transition-transform  child:p-2 px-2 lg:px-12 child:text-sm child:lg:text-base">
                    <li className='main-menu menu-title items-center justify-center text-base lg:text-xl hover:bg-primaryText hover:text-mainPrimary child-hover:transition-all child:delay-150 lg:flex hidden'
                    >

                        <IoIosArrowDown className='down-icon ' />
                        گروه های محصولات
                        <AiOutlineMenu className='menu-icon  ' />

                        <div className='hidden-menu rounded-t-md hidden-groups   '>
                            <div className="columns first-column">
                                <ul className="columns-list column-one-list" >
                                    <li className='columns-lins__item head-list '>کالای دیجیتال</li>
                                    <li className='columns-lins__item column-one-list__items'>
                                        <Link>

                                            مد و پوشاک
                                        </Link> </li>
                                    <li className='columns-lins__item column-one-list__items'> <Link>فرهنگ و هنر</Link>
                                    </li>
                                    <li className='columns-lins__item column-one-list__items'> <Link>لوازم منزل </Link>
                                    </li>
                                    <li className='columns-lins__item column-one-list__items'> <Link>سلامت و زیبایی</Link>
                                    </li>
                                    <li className='columns-lins__item column-one-list__items'> <Link>جواهرات</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="columns-list">
                                    <li className='columns-lins__item head-list'>صوت</li>
                                    <li className='columns-lins__item'><Link>رایو دیجیتال</Link></li>
                                    <li className='columns-lins__item'><Link>ضبط صوت</Link></li>
                                    <li className='columns-lins__item'><Link>اسپیکر </Link></li>
                                    <li className='columns-lins__item'><Link>هدفون</Link></li>
                                    <li className='columns-lins__item'><Link>میکروفون</Link></li>
                                </ul>
                                <ul className="columns-list">
                                    <li className='columns-lins__item head-list'>موبایل</li>
                                    <li className='columns-lins__item'><Link>گوشی موبایل</Link></li>
                                    <li className='columns-lins__item'><Link>تبلت</Link></li>
                                    <li className='columns-lins__item'><Link>کیف و کاور</Link></li>
                                    <li className='columns-lins__item'><Link>جانبی موبایل</Link></li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="columns-list">
                                    <li className='columns-lins__item head-list'>تصویر</li>
                                    <li className='columns-lins__item'><Link>ال سی دی</Link></li>
                                    <li className='columns-lins__item'><Link>تلویزیون</Link></li>
                                    <li className='columns-lins__item'><Link>گیرنده دیجیتال</Link></li>

                                </ul>
                                <ul className="columns-list">
                                    <li className='columns-lins__item head-list'>کنسول بازی</li>
                                    <li className='columns-lins__item'><Link>پلی استیشن 4</Link></li>
                                    <li className='columns-lins__item'><Link>پلی استیشن 3</Link></li>
                                    <li className='columns-lins__item'><Link>پلی استیشن 2</Link></li>
                                    <li className='columns-lins__item'><Link>ایکس باکس 360</Link></li>
                                    <li className='columns-lins__item'><Link>نینتندو</Link></li>
                                    <li className='columns-lins__item'><Link>بازی های کامپیوتری</Link></li>
                                </ul>

                            </div>
                            <div className="columns">
                                <img src="../images/megamenu-image1.png" className='hidden-groups__img' />
                            </div>

                        </div>
                    </li>
                    <li className='main-menu menu-title flex  text-center justify-center bg-mainPrimaryLight hover:bg-none md:bg-mainPrimary hover:md:bg-primaryText hover:text-mainPrimary p-0  md:w-44 lg:w-60  child-hover:transition-all child:delay-150 lg:hidden  '>
                        <Button variant="primary" className='border-none   hidden md:flex  hover:bg-primaryText hover:text-mainPrimary   p-1 lg:p-2.5' onClick={handleShow}>
                            <MdKeyboardArrowLeft className='down-icon block lg:hidden' />
                            <span className=' md:text-sm lg:text-xl '>
                                گروه های محصولات</span>
                        </Button>
                        <Button variant="primary" className='border-none justify-center items-center w-8 h-8 hover:bg-primaryText hover:text-mainPrimary  flex md:hidden p-0 ' onClick={handleShow}>
                            <AiOutlineMenu className='menu-icon w-8 h-8  ' />

                        </Button>

                        <Offcanvas show={show} onHide={handleClose} placement='end' dir="rtl" >
                            <Offcanvas.Header closeButton className='bg-shadowPrimary'>
                                <Offcanvas.Title className='  w-full  flex flex-row-reverse justify-between ' >
                                    <RxCross2 onClick={() => handleClose()} className='hover:text-gray-700 text-mainPrimary p-1 cursor-pointer rounded-md border border-mainPrimaryLight shadow-sm w-8 h-8' />
                                    <span className='text-mainPrimary text-xl  font-medium'>
                                        گروه های محصولات
                                    </span>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='bg-shadowPrimary'>

                                <div className='flex flex-col  justify-start items-start first-letter: text-mainPrimaryLight'>
                                    <div className="columns first-column border-none  grid grid-rows-1 grid-cols-2 gap-x-4">
                                        <ul className="columns-list pl-2 column-one-list flex flex-col items-start justify-start  border-l border-gray-500/50" >
                                            <li className='columns-lins__item head-list mr-0 '>کالای دیجیتال</li>
                                            <li className='columns-lins__item column-one-list__items'>
                                                <Link>

                                                    مد و پوشاک
                                                </Link> </li>
                                            <li className='columns-lins__item column-one-list__items'> <Link>فرهنگ و هنر</Link>
                                            </li>
                                            <li className='columns-lins__item column-one-list__items'> <Link>لوازم منزل </Link>
                                            </li>
                                            <li className='columns-lins__item column-one-list__items'> <Link>سلامت و زیبایی</Link>
                                            </li>
                                            <li className='columns-lins__item column-one-list__items'> <Link>جواهرات</Link>
                                            </li>
                                        </ul>

                                        <div className="columns ">
                                            <ul className="columns-list pl-2 flex flex-col items-start justify-start ">
                                                <li className='columns-lins__item head-list mr-0'>صوت</li>
                                                <li className='columns-lins__item'><Link>رایو دیجیتال</Link></li>
                                                <li className='columns-lins__item'><Link>ضبط صوت</Link></li>
                                                <li className='columns-lins__item'><Link>اسپیکر </Link></li>
                                                <li className='columns-lins__item'><Link>هدفون</Link></li>
                                                <li className='columns-lins__item'><Link>میکروفون</Link></li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className='columns first-column  border-none  grid grid-rows-1 grid-cols-2 gap-x-4'>
                                        <div className="columns ">
                                            <ul className="columns-list pl-2 flex flex-col items-start justify-start border-l border-gray-500/50 ">
                                                <li className='columns-lins__item head-list'>تصویر</li>
                                                <li className='columns-lins__item'><Link>ال سی دی</Link></li>
                                                <li className='columns-lins__item'><Link>تلویزیون</Link></li>
                                                <li className='columns-lins__item'><Link>گیرنده دیجیتال</Link></li>



                                                <li className='columns-lins__item head-list'>کنسول بازی</li>
                                                <li className='columns-lins__item'><Link>پلی استیشن 4</Link></li>
                                                <li className='columns-lins__item'><Link>پلی استیشن 3</Link></li>
                                                <li className='columns-lins__item'><Link>پلی استیشن 2</Link></li>
                                                <li className='columns-lins__item'><Link>ایکس باکس 360</Link></li>
                                                <li className='columns-lins__item'><Link>نینتندو</Link></li>
                                                <li className='columns-lins__item'><Link>بازی های کامپیوتری</Link></li>
                                            </ul>

                                        </div>
                                        <div className="columns ">
                                            <ul className="columns-list pl-2 flex flex-col items-start justify-start ">
                                                <li className='columns-lins__item head-list mr-0'>موبایل</li>
                                                <li className='columns-lins__item'><Link>گوشی موبایل</Link></li>
                                                <li className='columns-lins__item'><Link>تبلت</Link></li>
                                                <li className='columns-lins__item'><Link>کیف و کاور</Link></li>
                                                <li className='columns-lins__item'><Link>جانبی موبایل</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </li>
                    <li className='main-menu child-hover:transition-all hidden lg:flex  child:delay-150 '>

                        <IoIosArrowDown className='down-icon' />

                        صفحات فروشگاه
                        <div className='hidden-menu rounded-t-md '>
                            <ul className="hidden-list">
                                <li>
                                    <Link to="/">
                                        صفحه اصلی

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/market">
                                        محصولات (لیست)

                                    </Link>
                                </li>

                                <li >
                                    <Link to="/articleList">

                                        بلاگ اموزشی
                                    </Link>

                                </li>
                            </ul>
                        </div>

                    </li>


                    <li className='main-menu child-hover:transition-all hidden lg:flex child:delay-150 '>
                        <IoIosArrowDown className='down-icon' />

                        سایر صفحات
                        <div className='hidden-menu rounded-t-md'>
                            <ul className="hidden-list">

                                <li>
                                    <Link to="/user-basket" >
                                        سبد خرید

                                    </Link>
                                </li>
                                <li className=''>
                                    <Link to="/factor" >
                                        پیش فاکتور

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" >
                                        ورود به سایت

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        ثبت نام در سایت

                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </li>
                    <li className='main-menu child-hover:transition-all flex lg:hidden child:delay-150 '>
                        <img src="./images/profile-2.webp" alt="" className='w-12 h-12 rounded-full  object-cover' />
                        <div className='hidden-menu rounded-t-md left-0 w-36 lg:w-60'>
                            <ul className="hidden-list">
                                <li className='hover:text-primaryText'>
                                    <Link to="/my-account" className=' flex flex-row-reverse  items-center justify-end gap-x-1' >
                                        <BiUserCircle className='text-mainPrimary hover:text-primaryText     w-5 h-5' />
                                        مشخصات کاربری

                                    </Link>
                                </li>
                                <li className='hover:text-primaryText'>
                                    <Link to="/my-account/my-address" className=' flex flex-row-reverse  items-center justify-end gap-x-1' >
                                        <BiShoppingBag className='text-mainPrimary hover:text-primaryText     w-5 h-5' />

                                        ادرس ها

                                    </Link>
                                </li>
                                <li className='hover:text-primaryText'>
                                    <Link to="/my-account/edit-account" className=' flex flex-row-reverse  items-center justify-end gap-x-1' >
                                        <FaRegAddressCard className='text-mainPrimary hover:text-primaryText     w-5 h-5' />

                                        ویرایش اطلاعات
                                    </Link>
                                </li>


                            </ul>
                        </div>

                    </li>
                    <li className='main-menu child-hover:transition-all hidden lg:flex child:delay-150 '>
                        <IoIosArrowDown className='down-icon' />

                        پروفایل کاربری
                        <div className='hidden-menu rounded-t-md'>
                            <ul className="hidden-list">
                                <li>
                                    <Link to="/my-account" >
                                        مشخصات کاربری

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-account/my-address">
                                        ادرس ها

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-account/edit-account">
                                        ویرایش اطلاعات
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </li>
                </ul>

            </div >
        </>
    )
}
