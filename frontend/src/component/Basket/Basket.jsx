import React, { useState } from 'react'
import HeaderPage from '../HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
import SideProductBox from "./../ProductBox/SideProductBox"
export default function Basket() {
    const [count, setCount] = useState(0)
    if (count < 0) {
        setCount(0)
    }
    const PlusCount = () => {
        setCount(count + 1)
    }
    const MinusCount = () => {
        setCount(count - 1)

    }
    return (
        <div>
            <HeaderPage title="سبد خرید" subtitle="مدیریت و خرید همزمان چند محصول" route="خانه" />
            <div className=" flex w-[90%] mt-4 mx-auto p-3 items-start   gap-x-3">
                <div className="w-1/4 flex flex-col items-center  border border-gray-50 rounded-sm p-2 space-y-4 ">
                    <div className='flex w-full m-2 flex-row-reverse justify-between text-lg rounded-sm font-bold p-3'>
                        <span> : جمع کل فاکتور</span>
                        <span>3.200.000 تومان</span>
                    </div>
                    <div className='flex w-full m-2 flex-row-reverse justify-between text-lg  bg-gray-100  font-bold p-3'>
                        <span> : جمع تخفیف</span>
                        <span>200.000 تومان</span>
                    </div>
                    <div className='flex w-full m-2 flex-row-reverse justify-between text-lg rounded-sm text-green-600 font-bold p-3'>
                        <span> : مبلغ قابل پرداخت </span>
                        <span>3.000.000 تومان</span>
                    </div>
                    <button className='w-[80%] p-2 mx-auto my-2 bg-green-700 text-white font-bold text-xl rounded-lg hover:bg-green-800 transition-colors duration-300' >ادامه ثبت سفارش</button>
                </div>
                <div className="w-3/4 border border-gray-50 rounded-sm p-3 space-y-4">
                    <p className='w-full text-right p2 text-lg font-semibold '>
                        می‌خواهید محصولات دیگری اضافه کنید؟
                        <Link to="/" className='text-mainPrimary mr-2' >بازگشت به فروشگاه</Link>
                    </p>
                    <table className=' flex flex-col justify-center items-end text-lg  font-semibold w-full space-y-2 '>
                        <thead className='w-full'>
                            <th className=' flex flex-row-reverse items-center justify-between px-2   rounded-sm bg-slate-200 font-semibold'>
                                <td className='w-1/5 text-end mr-2'>کالا</td>
                                <td>قیمت واحد</td>
                                <td>تعداد</td>
                                <td>تخفیف</td>
                                <td>قیمت نهایی</td>
                            </th>
                        </thead>
                        <tbody>
                            <tr className='flex flex-row-reverse w-full h-auto items-center justify-between p-2 border-b border-b-gray-300 m-1'>
                                <td className='w-[30%]'>
                                    <SideProductBox title="گوشی موبایل سامسونگ مدل Galaxy A21s
                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت" img="phone1.webp" price="" />
                                </td>
                                <td>
                                    3.200.000 تومان
                                </td>
                                <td className='flex justify-center items-center space-x-2'>
                                    <span onClick={PlusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm cursor-pointer border border-slate-50'>+</span>
                                    <input type="text" value={count} disabled className='w-12 h-12 bg-slate-100 rounded-sm  text-center' />
                                    <span onClick={MinusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm  cursor-pointer border border-slate-50'>-</span>
                                </td>
                                <td>
                                    3.200.000 تومان

                                </td>
                                <td className='flex flex-col-reverse items-center justify-center'>
                                    <button className='m-2 text-white bg-red-500 px-3 py-2 hover:bg-red-600  rounded-lg text-sm'>حذف </button>       3.000.000 تومان
                                </td>

                            </tr>
                            <tr className='flex flex-row-reverse w-full h-auto items-center justify-between p-2 border-b border-b-gray-300 m-1'>
                                <td className='w-[30%]'>
                                    <SideProductBox title="گوشی موبایل سامسونگ مدل Galaxy A21s
                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت" img="phone1.webp" price="" />
                                </td>
                                <td>
                                    3.200.000 تومان
                                </td>
                                <td className='flex justify-center items-center space-x-2'>
                                    <span onClick={PlusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm cursor-pointer border border-slate-50'>+</span>
                                    <input type="text" value={count} disabled className='w-12 h-12 bg-slate-100 rounded-sm  text-center' />
                                    <span onClick={MinusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm  cursor-pointer border border-slate-50'>-</span>
                                </td>
                                <td>
                                    3.200.000 تومان

                                </td>
                                <td className='flex flex-col-reverse items-center justify-center'>
                                    <button className='m-2 text-white bg-red-500 px-3 py-2 hover:bg-red-600  rounded-lg text-sm'>حذف </button>       3.000.000 تومان
                                </td>

                            </tr>
                            <tr className='flex flex-row-reverse w-full h-auto items-center justify-between p-2 border-b border-b-gray-300 m-1'>
                                <td className='w-[30%]'>
                                    <SideProductBox title="گوشی موبایل سامسونگ مدل Galaxy A21s
                    دارای قابلیت دو سیم کارته و حافظه 128 گیگا بایت" img="phone1.webp" price="" />
                                </td>
                                <td>
                                    3.200.000 تومان
                                </td>
                                <td className='flex justify-center items-center space-x-2'>
                                    <span onClick={PlusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm cursor-pointer border border-slate-50'>+</span>
                                    <input type="text" value={count} disabled className='w-12 h-12 bg-slate-100 rounded-sm  text-center' />
                                    <span onClick={MinusCount} className='text-xl flex items-center justify-center font-bold  w-10 h-12  bg-slate-100 rounded-sm  cursor-pointer border border-slate-50'>-</span>
                                </td>
                                <td>
                                    3.200.000 تومان

                                </td>
                                <td className='flex flex-col-reverse items-center justify-center'>
                                    <button className='m-2 text-white bg-red-500 px-3 py-2 hover:bg-red-600  rounded-lg text-sm'>حذف </button>       3.000.000 تومان
                                </td>

                            </tr>
                        </tbody>
                    </table>

                    <button className='w-full text-left text-lg font-bold tracking-tighter text-red-600 hover:text-red-500 p-2 '>حذف کل سبد خرید</button>
                </div>
            </div>
        </div>
    )
}
