import React, { useState } from 'react'
import Input from '../../../component/Input/Input'
import { useForm } from '../../../Hooks/useForm'
import Button from '../../../component/Button/Button'
import { maxValidator, minValidator, requiredValidator } from '../../../Validators/rules'
import Editor from '../../../Editor/Editor'
export default function AdminArticles() {
    const [articleTags, setArticleTags] = useState("")
    const [articleCover, setArticleCover] = useState({})
    const [articleBody, setArticleBody] = useState("")
    const [formState, onInputHandler] = useForm(
        {
            title: {
                value: "",
                isValid: false,
            },
            content: {
                value: "",
                isValid: false,
            },
            tags: {
                value: "",
                isValid: false,
            },
            desc: {
                value: "",
                isValid: false,
            },


        }
        , false
    );
    const settingArticlesTags = (event) => {
        setArticleTags(event.target.value)
    }
    const useArticle = event => {
        console.log(event);
    }
    const useArticleSaveText = () => {
        console.log(event);
    }
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">اضافه کردن مقاله جدید</h1>
                <div className="     my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-y-5">
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> نام مقاله :</label>

                        <Input type="text" dir='rtl' name="name" id="title" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),

                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div className='w-1/2 flex flex-col items-end justify-center'>
                        <label htmlFor="password" className='text-lg font-thin text-mainPrimaryLight'> عکس مقله</label>
                        <input type="file" dir='rtl' name="password" className='max-w-[20rem] p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'

                            onChange={event => {
                                setArticleCover(event.target.files[0])
                            }}

                        />


                    </div>
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> تگ  اصلی مقاله :</label>

                        <Input type="text" dir='rtl' name="name" id="tags" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),

                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <label htmlFor="name" className='text-lg font-thin text-mainPrimaryLight'> چکیده مقاله : </label>

                        <Input type="text" dir='rtl' name="name" id="desc" className='w-full p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1'
                            validations={[
                                requiredValidator(),
                                minValidator(8)

                            ]}
                            onInputHandler={onInputHandler}
                            element='input' />
                    </div>
                    <div>
                        <Editor value={articleBody} setValue={setArticleBody} />
                    </div>
                    <Button
                        className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md  " ${formState.isFormValid
                            ? "login-btn-success"
                            : "login-btn-error"
                            }`}
                        type='submit'
                        onClick={useArticleSaveText}
                        disabled={!formState.isFormValid}>

                        <span>ذخیره متن مقاله</span>
                    </Button>
                    <Button
                        className={`className="text-lg font-medium mt-4 py-2 px-5 rounded-md  " ${formState.isFormValid
                            ? "login-btn-success"
                            : "login-btn-error"
                            }`}
                        type='submit'
                        onClick={useArticle}
                        disabled={!formState.isFormValid}>

                        <span>ثبت  مقاله</span>
                    </Button>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">  مقاله ها</h1>
                <table className='w-full my-4 '>
                    <thead>
                        <tr className='p-3 text-lg font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3'>
                            <td>نام مقاله</td>
                            <td>تگ مقاله </td>
                            <td>خلاصه مقاله</td>
                            <td>ادیت</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='p-2 text-base font-light  flex justify-between items-center flex-row-reverse'>
                            <td>گوشی های جدید ۲۰۲۳</td>
                            <td>گوشی موبایل</td>

                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                                <button>مشاهده خلاصه</button>

                            </td>
                            <td className=' bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText p-1 px-2 rounded-sm'>

                                <button>ذف مقاله</button>

                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
