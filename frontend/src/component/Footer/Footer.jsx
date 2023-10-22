import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <div >
                <div className="flex items-center flex-col lg:flex-row-reverse gap-y-3 mt-0 w-full h-70 p-3 text-primaryText bg-mainPrimaryLight ">
                    <div className="flex flex-row-reverse p-2  text-sm md:text-base items-start w-full lg:w-1/2 justify-evenly ">
                        <ul className='space-y-2 flex flex-col items-end justify-center'>
                            <li className='text-lg lg:text-xl font-bold list-none'>گروه های محصولات</li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="">  گوشی موبایل </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to=""> جانبی کامپیوتر </Link></li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to=""> جانبی موبایل </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to=""> ساعت هوشمند </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to=""> دوربین </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to=""> لپ تاپ </Link> </li>
                        </ul>
                        <ul className='space-y-2 flex flex-col items-end justify-center'>
                            <li className='text-lg lg:text-xl font-bold list-none'>ناحیه کاربری</li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="/login">  ورود به سایت  </Link></li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="register"> عضویت در سایت </Link></li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="/user-basket"> سبد خرید  </Link>  </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="/factor"> پیش فاکتور </Link>  </li>
                        </ul>
                        <ul className='space-y-2 flex flex-col items-end justify-center'>
                            <li className='text-lg lg:text-xl font-bold list-none '>دسترسی سریع</li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="/articleList">  بلاگ اموزشی </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer"><Link to="/questions"> سوالات متداول </Link> </li>
                            <li className="list-none hover:text-gray-400 hover:cursor-pointer" onClick={() => scroll(0, 0)}>تماس با ما</li>
                        </ul>


                    </div>
                    <div className="flex flex-col items-end justify-end w-full lg:w-1/2 h-full gap-3 lg:border-none border-t border-mainPrimary pt-4 lg:first-letter:p-0 ">
                        <span className='text-lg font-bold flex flex-row-reverse '> <img src="../images/logo.png" alt="" /> روبیک مارکت</span>

                        <span className='w-3/3 text-right'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</span>
                        <div className='w-full flex justify-end p-1 leading-9 text-right h-auto text-xl rounded-sm'>
                            <span className="">همه روزه، 24 ساعت شبانه روزه
                                پاسخگوی شما هستیم
                                09351234567</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-between text-xs md:text-sm text-primaryText bg-mainPrimary w-full mx-auto h-10 px-3  md:px-5">
                    <span className='flex flex-row-reverse items-center gap-x-2 child:shadow-shadowPrimary'>مارا دنبال کنید
                        <FaInstagram className='text-rose-600 text-xl' />
                        < BiLogoFacebook className='text-blue-800 text-xl' />
                        <AiFillLinkedin className='text-blue-700 text-xl' />
                        <AiOutlineTwitter className='text-blue-600 text-xl' />
                        <AiFillYoutube className='text-rose-500 text-xl' />
                    </span>
                    <span>تمام حقوق مادی  و معنوی محفوظ است</span>
                </div>
            </div>
        </>
    )
}
