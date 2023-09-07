import React from 'react'
import "./index.css"
import LandingPage from '../../component/LadingPage/LandingPage'
import Section from '../../component/Section/Section'
import ProductBox from '../../component/ProductBox/ProductBox'
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
export default function Index() {
    return (
        <>
            <LandingPage />
            <Section names={[
                { title: "محصولات منتخب" },
                { title: "تخفیف خورده" },
                { title: "پربازدید ترین" },
            ]} />
            <div className="products">
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"}  >

                    <p className='product-info'>
                        <span className='product-info-item'>6.000.000 تومان</span>
                        <span className='product-info-item'> (۱۲ رای دهنده)
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />

                            <BsStarHalf />

                        </span >


                    </p>
                </ProductBox>
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"}  >

                    <p className='product-info'>
                        <span className='product-info-item'>6.000.000 تومان</span>
                        <span className='product-info-item'>   (۱۲ رای دهنده)
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />

                            <BsStarHalf />

                        </span >


                    </p>
                </ProductBox>
                <ProductBox img={"slide2.jpg"} title={"گوشی موبایل سامسونگ"}  >

                    <p className='product-info'>
                        <span className='product-info-item'>6.000.000 تومان</span>
                        <span className='product-info-item'>    (۱۲ رای دهنده)
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />

                            <BsStarHalf />

                        </span >


                    </p>
                </ProductBox>

            </div >
        </>
    )
}
