import React from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { requiredValidator, minValidator, maxValidator, emailValidator, phoneNumberValidator } from '../../Validators/rules'
export default function Login() {

    const [formState, onInputHandler] = useForm(
        {
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
    const useLogin = (event) => {
        event.preventDefault();

        const loginUser = {
            identifier: formState.inputs.username.value,
            password: formState.inputs.password.value,
        };
        fetch("http://localhost:4000/v1/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginUser),
        })
            .then((res) => {
                if (!res.ok) {
                    return res.text().then((text) => {
                        throw new Error(text);
                    });
                } else {
                    return res.json();
                }
            })
            .then((result) => {
                console.log(result);
                authContext.login({}, result.accessToken);

            };
        return (
            <div className='w-full  '>
                <HeaderPage title="ورود به ناحیه کاربری" subtitle="وارد ناحیه کاربری خود در روبیک مارکت شوید." route="خانه" />
                <div className=" container p-3 w-full h-auto flex flex-row-reverse items-center gap-x-4 justify-between">
                    <img src="./images/login.jpg" alt="" className='lg:w-1/2 w-full lg:block hidden h-full object-cover text-center  m-3 bg-none' />
                    <div className="w-full lg:w-1/2   my-10 flex-col text-right items-center space-y-4">
                        <h1 className='text-2xl font-semibold  text-mainPrimary  '>وارد شوید</h1>
                        <p className="text-base lg:text-lg font-medium text-mainPrimaryLight">با ورود به ناحیه کاربری خود از همه امکانات سایت بهره مند شوید.     </p>


                        <div>
                            <label htmlFor="email" className='text-lg font-thin text-mainPrimaryLight'> : پست الکترونیک </label>
                            <Input type="email" dir='rtl' name="email" id="email" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                                validations={[
                                    requiredValidator(),
                                    emailValidator()
                                ]}
                                onInputHandler={onInputHandler}
                                element='input'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> :رمز عبور </label>
                            <Input type="password" dir='rtl' name="password" id="password" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                                validations={[
                                    requiredValidator(),
                                    minValidator(8),
                                    maxValidator(20)
                                ]}
                                onInputHandler={onInputHandler}
                                element='input'
                            />
                        </div>

                        <Button
                            className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md " ${formState.isFormValid
                                ? "login-btn-success"
                                : "login-btn-error"
                                }`}
                            type='submit'
                            onClick={useLogin}
                            disabled={!formState.isFormValid}>

                            <span>ورود</span>
                        </Button>
                        <p className="text-lg font-medium text-mainPrimaryLight">   ثبت نام نکردید؟ برو به صفحه  <Link to="/register" className='text-mainPrimary text-xl font-bold'> ثبت نام</Link></p>
                    </div>
                </div>

            </div>
        )
    }
