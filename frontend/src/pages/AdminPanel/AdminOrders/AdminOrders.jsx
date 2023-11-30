import React, { useState } from 'react'
import Swal from 'sweetalert2'
export default function AdminOrders() {
    const [showOrdersID, setShowOrderID] = useState("")
    const showAddress = () => {
        Swal.fire({
            title: "ادرس مشتری :",
            text: "شهریار و بلوار نواب وکوچه شهید عباسی",
            confirmButtonText: " حله",
        })
    }
    const gettingFactorCode = () => {
        Swal.fire({
            title: "لطفا برای تغییر وضعیت سفارش کد فاکتور را وارد کنید",
            input: "text"
            , confirmButtonText: "دریافت کد",
            showCancelButton: "true",
            cancelButtonText: "بیخیال",
            inputPlaceholder: "کد فاکتور"
        }).then((res) => {
            if (res.isConfirmed) {

                console.log(res.value);
            }
        })
    }
    const showOrders = () => {

        setShowOrderID(25)
    }
    return (
        <div className='w-[95%] mx-auto p-1 text-right'>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">سفارشات درحال ارسال</h1>
                <table className='w-full my-4 '>
                    <thead>
                        <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                            <td>نام سفارش دهنده</td>
                            <td>  کد پستی سفارش دهنده </td>
                            <td>وضعیت سفارش</td>
                            <td>محصولات سفارش دهنده</td>
                            <td>ادرس سفارش دهنده</td>
                            <td>ادیت</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>علی تاجیک</td>
                            <td>65656544665456</td>
                            <td>درحال انجام</td>

                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-1 rounded-sm'>

                                <button onClick={showOrders}>مشاهده سفارشات</button>

                            </td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-1 rounded-sm'>

                                <button onClick={showAddress}>مشاهده ادرس</button>

                            </td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-1 rounded-sm'>

                                <button onClick={gettingFactorCode}>سفارش انجام شد</button>

                            </td>
                        </tr>
                        {
                            showOrdersID === 25 ? (
                                <div className='w-[95%] mx-auto p-1 text-right'>
                                    <ol className="w-full text-lg flex gap-x-5 flex-col justify-end text-mainPrimaryLight ">
                                        <li>سامسونگ A21</li>
                                        <li>سامسونگ A21</li>
                                        <li>سامسونگ A21</li>
                                    </ol>
                                </div>
                            ) : (
                                <div></div>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">سفارشات  ارسال شده</h1>
                <table className='w-full my-4 '>
                    <thead>
                        <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                            <td>نام سفارش دهنده</td>
                            <td>  کد پستی سفارش دهنده </td>
                            <td>وضعیت سفارش</td>
                            <td>کد فاکتور</td>
                            <td>محصولات سفارش دهنده</td>
                            <td>ادرس سفارش دهنده</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>علی تاجیک</td>
                            <td>65656544665456</td>
                            <td>ارسال شده</td>

                            <td >

                                2652165

                            </td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-1 rounded-sm'>

                                <button onClick={showOrders}>مشاهده سفارشات</button>

                            </td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-1 rounded-sm'>

                                <button onClick={showAddress}>مشاهده ادرس</button>

                            </td>
                        </tr>
                        {
                            showOrdersID === 25 ? (
                                <div className='w-[95%] mx-auto p-1 text-right'>
                                    <ol className="w-full text-lg flex gap-x-5 flex-col justify-end text-mainPrimaryLight ">
                                        <li>سامسونگ A21</li>
                                        <li>سامسونگ A21</li>
                                        <li>سامسونگ A21</li>
                                    </ol>
                                </div>
                            ) : (
                                <div></div>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
