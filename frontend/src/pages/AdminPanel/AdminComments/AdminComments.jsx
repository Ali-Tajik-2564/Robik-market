import React from 'react'


import Swal from 'sweetalert2'
export default function AdminComments() {

    const onShowComment = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "خیلی خفن بود دمت گرم",
            confirmButtonText: "حله"
        })
    }
    const onDelete = (event) => {
        event.preventDefault()
        event.preventDefault()
        Swal.fire({
            title: "کامنت با موفقیت حذف شد",
            icon: "success",
            confirmButtonText: "حله"
        })
            .then(res => {
                console.log(res);
            })

    }
    const onApproved = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "کامنت با موفقیت تایید شد",
            icon: "success",
            confirmButtonText: "حله"
        })
            .then(res => {
                console.log(res);
            })

    }
    return (
        <div className='w-[95%] mx-auto p-1 text-right'>
            <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">  کامنت  ها</h1>
            <table className='w-full my-4 '>
                <thead>
                    <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                        <td>نام کاربر</td>
                        <td> محصول </td>
                        <td>تعداد ستاره</td>
                        <td>متن کامنت</td>
                        <td>حذف</td>
                        <td>تایید</td>
                    </tr>
                </thead>
                <tbody >
                    <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                        <td>علی تاجیک</td>
                        <td>گوشی موبایل</td>
                        <td>5</td>

                        <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                            <button onClick={onShowComment}>مشاهده کامنت</button>

                        </td>
                        <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                            <button onClick={onDelete}>حذف </button>

                        </td>
                        <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                            <button onClick={onApproved}>تایید</button>

                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}
