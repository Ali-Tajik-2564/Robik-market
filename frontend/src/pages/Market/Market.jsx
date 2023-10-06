import React, { useState } from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import CategoryFilter from '../../component/CategoryFilter/CategoryFilter'
import NewProductsAccording from '../../component/newProductsAccording/newProductsAccording'

export default function Market() {
    const [category, setCategory] = useState("")
    console.log(category);
    return (
        <div className='bg-primaryText '>
            <HeaderPage title="فروشگاه روبیک مارکت" subtitle="هر آنچه نیاز دارید در این فروشگاه موجود است" route="خانه" />
            <div className=' container mx-auto flex flex-row-reverse justify-between items-center p-4 bg-slate-50 h-screen '>
                <div className="w-1/4 h-full flex flex-col justify-start gap-y-5 ">
                    <CategoryFilter title="گروه های محصولات" categories={["گوشی موبایل", "جانبی موبایل", "دوربین دیجیتال", "ساعت هوشمند", "لپ تاپ"]} setCategoryValue={setCategory} />
                    <div className="w-full flex gap-x-5 items-center justify-end p-2 rounded-sm text-mainPrimaryLight bg-primaryText">
                        <span>فقط کالا های موجود</span>
                        <input type="checkbox" name="inbox" className="w-4 h-4 bg-shadowPrimary checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />

                    </div>
                    <div className="w-full flex gap-x-5 items-center justify-end p-2 rounded-sm text-mainPrimaryLight bg-primaryText">
                        <span>فقط کالاهای دارای گارانتی</span>
                        <input type="checkbox" name="garenty" className="w-4 h-4 bg-shadowPrimary checked:border-4  rounded-full checked:border-blue-500 appearance-none checked:shadow-lg checked:shadow-blue-600" />

                    </div>
                    <NewProductsAccording title="جدید ترین محصولات" />
                </div>
                <div className="w-3 /4"></div>
            </div>
        </div>
    )
}
