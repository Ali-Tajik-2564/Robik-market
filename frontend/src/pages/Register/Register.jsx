import React from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { requiredValidator, minValidator, maxValidator, emailValidator, phoneNumberValidator } from '../../Validators/rules'
export default function Register() {
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
    return (
        <div className='w-full  '>
            <HeaderPage title="عضویت در سایت" subtitle="با عضویت در سایت از همه امکانات روبیک مارکت بهره مند شوید." route="خانه" />
            <div className="container p-4 my-10 w-full h-auto flex flex-row-reverse items-center gap-x-4 justify-between">
                <img src="./images/register.png" alt="" className='w-1/2 hidden md:block h-full object-cover text-center  m-3 bg-none' />
                <div className=" w-full md:w-1/2    flex-col text-right items-center space-y-4">
                    <h1 className='text-2xl font-semibold  text-mainPrimary  '>عضویت در روبیک مارکت</h1>
                    <p className="text-lg font-medium text-mainPrimaryLight">با عضویت در سایت از همه امکانات سایت بهره مند شوید.</p>
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

                    <Button
                        className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md  " ${formState.isFormValid
                            ? "login-btn-success"
                            : "login-btn-error"
                            }`}
                        type='submit'
                        //   onClick={useLogin}
                        disabled={!formState.isFormValid}>

                        <span>ثبت  نام</span>
                    </Button>
                    <p className="text-lg font-medium text-mainPrimaryLight">   ثبت نام کردید؟ برو به صفحه  <Link to="/login" className='text-mainPrimary font-bold text-xl'> ورود</Link></p>
                </div>
            </div>

        </div>
    )
}
