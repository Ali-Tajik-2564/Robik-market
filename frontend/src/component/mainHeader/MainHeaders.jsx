import React, { useEffect } from 'react'
import "./MainHeaders.css"
import { HiShoppingCart } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
export default function MainHeaders() {

    return (
        <>
            <div className="top">
                <div className="logo">
                    <span className='logo-title'>روبیک مارکت</span>
                    <img src="../images/logo.png" alt="logo" className='logo-img' />
                </div>

                <div className="search-box">
                    <input type="text" className="search-box__input" placeholder='جستجو کنید ...' dir='rtl' />
                    <BiSearch className='search-box__icon' />
                </div>

                <span className='register'>
                    <Link to="/login" >
                        ورود/ثبت نام
                    </Link>
                </span>

                <button className='basket'>
                    <Link to="/user-basket" className='basket-text'>سبد خرید (۲)</Link>
                    <HiShoppingCart className='basket-icon' />
                </button>


            </div>
            <div className="bottom">
                <ul className="access-bar space-x-2">
                    <li className='main-menu menu-title' >
                        <IoIosArrowDown className='down-icon' />
                        گروه های محصولات
                        <AiOutlineMenu className='menu-icon' />
                        <div className='hidden-menu hidden-groups'>
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

                    <li className='main-menu '>

                        <IoIosArrowDown className='down-icon' />

                        صفحات فروشگاه
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link to="/">
                                        صفحه اصلی

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/productList">
                                        محصولات (لیست)

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user-panel">
                                        پنل کاربری

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className='main-menu '>
                        <Link to="/questions">
                            سوالات متداول
                        </Link>

                    </li>
                    <li className='main-menu '>
                        <Link to="/articleList">

                            بلاگ اموزشی
                        </Link>

                    </li>
                    <li className='main-menu '>
                        <IoIosArrowDown className='down-icon' />

                        سایر صفحات
                        <div className='hidden-menu'>
                            <ul className="hidden-list">

                                <li>
                                    <Link to="/user-basket" >
                                        سبد خرید

                                    </Link>
                                </li>
                                <li className='list-border__bottom'>
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
                    <li className='main-menu '>
                        <IoIosArrowDown className='down-icon' />

                        پروفایل کاربری
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link to="/user-panel" >
                                        مشخصات کاربری

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user-panel/orders">
                                        سفارشات

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user-panel/address">
                                        ادرس ها

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
