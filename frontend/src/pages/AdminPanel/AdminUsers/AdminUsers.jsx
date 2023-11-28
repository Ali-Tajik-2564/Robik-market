import React, { useState } from 'react'
import Input from '../../../component/Input/Input'
import { useForm } from '../../../Hooks/useForm'
import Button from '../../../component/Button/Button'
import { maxValidator, minValidator, requiredValidator } from '../../../Validators/rules'
export default function AdminUsers() {
    const [userRole, setUserRole] = useState("")
    const [formState, onInputHandler] = useForm(
        {
            username: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },

        }
        , false
    );
    const useRegister = (event) => {
        event.preventDefault();
        const newUser = {
            username: formState.inputs.username.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            confirmPassword: formState.inputs.password.value,
            name: formState.inputs.name.value,
            phone: formState.inputs.phone.value,
            role: userRole
        };
        fetch("http://localhost:4000/v1/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        })
            .then((res) => {
                if (res.ok) {

                    return res.json()

                } else if (res.status === 403) {
                    swal({
                        title: "این شماره تماس بن شده است",
                        icon: "error",
                        button: "ای بابا"
                    })

                }
            })
            .then((result) => {
                console.log(result);
                authContext.login(result.user, result.accessToken);
            });
    };
    const selectRole = (event) => {
        setUserRole(event.target.value)
    }
    return (
        <div>
            <div><h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">اد کردن کاربر</h1>
                <div className="     my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-y-5">
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> : نام و نام خانوادگی</label>

                        <Input type="text" dir='rtl' name="name" id="username" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                minValidator(4),
                                maxValidator(12)
                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> : شماره تلفن</label>

                        <Input type="text" dir='rtl' name="phone" id="phone" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                minValidator(11),
                                phoneNumberValidator()
                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <label htmlFor="email" className='text-lg font-thin text-mainPrimaryLight'> : پست الکترونیک </label>

                        <Input type="email" dir='rtl' name="email" id="email" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                emailValidator()
                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> :رمز عبور </label>
                        <Input type="password" dir='rtl' name="password" id="password" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                minValidator(8),
                                maxValidator(20),
                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> نقش کاربر</label>
                        <select onChange={selectRole}>

                            <option value="ADMIN">ادمین</option>
                            <option value="USER">کاربر</option>

                        </select>
                    </div>

                    <Button
                        className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md  " ${formState.isFormValid
                            ? "login-btn-success"
                            : "login-btn-error"
                            }`}
                        type='submit'
                        onClick={useRegister}
                        disabled={!formState.isFormValid}>

                        <span>ثبت  نام</span>
                    </Button>
                </div>
            </div>
            <div><h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">کاربران سایت</h1>

                <table className='w-full my-4 '>
                    <thead>
                        <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                            <td>نام نام خانوادگی</td>
                            <td>پست الکترونیک</td>
                            <td>عنوان</td>
                            <td>ادیت</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>علی تاجیک</td>
                            <td>ali.1385.tajik@gmail.com</td>
                            <td>مدیر</td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>
                                <Link to="/admin-panel/users">
                                    <button>ادیت</button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>امیر محمد</td>
                            <td>ali.1385.tajik@gmail.com</td>
                            <td>مدیر</td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>
                                <Link to="/admin-panel/users">
                                    <button>ادیت</button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>محمد</td>
                            <td>ali.1385.tajik@gmail.com</td>
                            <td>کاربر</td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>
                                <Link to="/admin-panel/users">
                                    <button>ادیت</button>
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
