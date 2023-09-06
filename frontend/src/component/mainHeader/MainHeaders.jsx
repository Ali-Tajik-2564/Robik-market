import React from 'react'
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
                    <img src="./images/logo.png" alt="logo" className='logo-img' />
                </div>

                <div className="search-box">
                    <input type="text" className="search-box__input" placeholder='جستجو کنید ...' dir='rtl' />
                    <BiSearch className='search-box__icon' />
                </div>

                <span className='register'>
                    <Link >
                        ورود/ثبت نام
                    </Link>
                </span>

                <button className='basket'>
                    <span className='basket-text'>سبد خرید (۲)</span>
                    <HiShoppingCart className='basket-icon' />
                </button>


            </div>
            <div className="bottom">
                <ul className="access-bar">
                    <li className='main-menu menu-title' >
                        <IoIosArrowDown className='down-icon' />
                        گروه های محصولات
                        <AiOutlineMenu className='menu-icon' />
                        <div className='hidden-menu hidden-groups'></div>
                    </li>
                    <li className='main-menu '>
                        درباره ما

                    </li>
                    <li className='main-menu '>

                        <IoIosArrowDown className='down-icon' />

                        صفحات فروشگاه
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link >
                                        محصولات (کاشی کاری)

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        محصولات (لیست)

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        جزيیات محصول

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className='main-menu '>
                        <IoIosArrowDown className='down-icon' />

                        تماس با فروشگاه
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link >
                                        سولات متداول

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        تماس با ما

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className='main-menu '>
                        <IoIosArrowDown className='down-icon' />

                        بلاگ اموزشی
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link >
                                        ارشیو مطالب

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        داخلی بلاگ

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className='main-menu '>
                        <IoIosArrowDown className='down-icon' />

                        سایر صفحات
                        <div className='hidden-menu'>
                            <ul className="hidden-list">
                                <li>
                                    <Link >
                                        مقایسه محصول

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        سبد خرید

                                    </Link>
                                </li>
                                <li className='list-border__bottom'>
                                    <Link >
                                        پیش فاکتور

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        ورود به سایت

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        ثبت نام در سایت

                                    </Link>
                                </li>
                                <li className='list-border__bottom'>
                                    <Link >
                                        بازیابی رمز عبور

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        صفحه ۴۰۴

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
                                    <Link >
                                        مشخصات کاربری

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        سفارشات

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        ادرس ها

                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        علاقه مندی ها

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                </ul>

            </div>
        </>
    )
}
