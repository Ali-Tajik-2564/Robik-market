import React, { useState } from 'react'
import Input from '../../../component/Input/Input'
import { useForm } from '../../../Hooks/useForm'
import Button from '../../../component/Button/Button'
import { maxValidator, minValidator, requiredValidator, emailValidator } from '../../../Validators/rules'
import Swal from 'sweetalert2'
export default function AdminOffs() {
    const [productId, setProductId] = useState("")
    const [formState, onInputHandler] = useForm(
        {
            offPercent: {
                value: "",
                isValid: false,
            },


        }
        , false
    );
    const useOffs = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "کد تخفیف با موفقیت ثبت شد",
            icon: "success",
            confirmButtonText: "حله"
        }).then(res => {
            console.log(res);
        })
    }
    const onDelete = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "کد تخفیف با موفقیت حذف شد",
            icon: "success",
            confirmButtonText: "حله"
        }).then(res => {
            console.log(res);
        })
    }
    const selectProductID = (event) => {
        setProductId(event.target.value)
        console.log(productId);
    }
    return (
        <div className='w-[95%] mx-auto p-1 text-right'>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">اضافه کردن تخفیف جدید</h1>
                <div className="     my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-y-5">
                    <div className='w-1/2 flex flex-col items-end justify-center'>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> : نام محصول    </label>
                        <select onChange={selectProductID}>

                            <option value="264652">گوشی موبایل</option>
                            <option value="4654658">لپتاب  auses</option>

                        </select>
                    </div>
                    <div className='w-1/2 flex flex-col items-end justify-center'>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> درصد تخفیف</label>

                        <Input type="text" dir='rtl' name="name" id="offPercent" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                minValidator(1),
                                maxValidator(3)
                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div className='w-1/2 flex flex-col items-end justify-center'>
                        <Button
                            className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md  " ${formState.isFormValid
                                ? "login-btn-success"
                                : "login-btn-error"
                                }`}
                            type='submit'
                            onClick={useOffs}
                            disabled={!formState.isFormValid}>

                            <span>ثبت  تخفیف</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">اضافه کردن تخفیف جدید</h1>
                <table className='w-full my-4 '>
                    <thead>
                        <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                            <td>نام محصول </td>
                            <td>درصد تخفیف </td>

                            <td>ادیت</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>گوشی موبایل</td>
                            <td>60</td>


                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                                <button onClick={onDelete}>حذف تخفیف</button>

                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
