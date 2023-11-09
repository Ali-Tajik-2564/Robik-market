import React, { useState } from 'react'
import Swal from "sweetalert2"
export default function UserEditInfo() {
    const [userName, setUserName] = useState(" مصطفی کلانتری")
    const [nationalCode, setNationalCode] = useState("1234567890")
    const [phoneNumber, setPhoneNumber] = useState("09351234567")
    const [email, setEmail] = useState("email@website.com")
    const [creditCard, setCreditCard] = useState("email@website.com")
    const [password, setPassword] = useState("123456")

    const editName = () => {
        const inputValue = userName;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا نام و نام خانوادگی جدید خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا نام و نام خانوادگی خود را وارد نمایید";
                }
            }
        })

        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "نام و نام خانوادگی شما با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }

    }
    const editNationalCode = () => {
        const inputValue = nationalCode;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا کد ملی خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا کد ملی خود را وارد نمایید";
                }
            }
        });
        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "کد ملی شما با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
    const editPhoneNumber = () => {
        const inputValue = phoneNumber;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا شماره تلفن خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا شماره تلفن خود را وارد نمایید";
                }
            }
        });
        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "شماره تلفن شما با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
    const editEmail = () => {
        const inputValue = email;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا پست الکترونیک  خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا پست الکترونیک  خود را وارد نمایید";
                }
            }
        });
        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "پست الکترونیک شما  با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
    const editCreditCart = () => {
        const inputValue = creditCard;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا شماره کارت خود برای برگشت وجه  خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا شماره کارت خود برای برگشت وجه  خود را وارد نمایید";
                }
            }
        });
        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "شماره کارت خود برای برگشت وجه  شما با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
    const editPassWord = () => {
        const inputValue = password;
        const { value: EditedInfo } = Swal.fire({
            title: "لطفا رمز عبور خود را وارد نمایید",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "لطفا رمز عبور خود را وارد نمایید";
                }
            }
        });
        if (EditedInfo.isConfirmed) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "رمز عبور شما با موفقیت ویرایش شد",
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
    return (
        <div>
            <div className="personal-info">
                <h1 className="text-xl text-right font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-2">اطلاعات شخصی</h1>

                <div className='w-full  flex flex-row-reverse  flex-wrap justify-start items-start gap-5'>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">نام و نام خانوادگی</h2>
                        <p className="text-sm font-thin">{userName}</p>
                        <svg onClick={editName} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">کدملی</h2>
                        <p className="text-sm font-thin">{nationalCode}</p>
                        <svg onClick={editNationalCode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">شماره تلفن همراه</h2>
                        <p className="text-sm font-thin">{phoneNumber}</p>
                        <svg onClick={editPhoneNumber} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">پست الکترونیک</h2>
                        <p className="text-sm font-thin">{email}</p>
                        <svg onClick={editEmail} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>
                    <span className=' flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">شماره کارت جهت مرجوع وجه</h2>
                        <p className="text-sm font-thin">{creditCard}</p>
                        <svg onClick={editCreditCart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>
                    <span className='flex-grow w-[23rem] p-4  flex flex-row-reverse item-end justify-between text-right gap-x-5 border-b border-mainPrimaryLight'>
                        <h2 className="text-base font-semibold ">رمز عبور</h2>
                        <p className="text-sm font-thin">{password}</p>
                        <svg onClick={editPassWord} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-mainPrimary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </span>

                </div>

            </div>
            <div className='user-address mb-5'>
                <h1 className="text-xl text-right font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-2">ادرس من</h1>
                <div className="w-full grid grid-rows-4 md:grid-rows-2  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                        <h2 className="text-lg text-mainPrimary"> : ادرس</h2>
                        <p className="text-sm text-mainPrimaryLight">فارس، شیراز، بلوار آزادگان، کارخانه نوآوری شیراز،</p>
                    </span>
                    <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                        <h2 className="text-lg text-mainPrimary"> : تحویل گیرنده</h2>
                        <p className="text-sm text-mainPrimaryLight">مصطفی کلانتری</p>
                    </span>
                    <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                        <h2 className="text-lg text-mainPrimary"> :شماره تلفن</h2>
                        <p className="text-sm text-mainPrimaryLight">09195729509</p>
                    </span>
                    <span className="flex   flex-row-reverse text-right items-end gap-x-3 p-1 pb-3 border-b border-mainPrimary">
                        <h2 className="text-lg text-mainPrimary"> : کد پستی</h2>
                        <p className="text-sm text-mainPrimaryLight">1234567890</p>
                    </span>
                </div>

            </div>
        </div>
    )
}
