import React from 'react'
import "./LandingPage.css"
import Carousel from 'react-bootstrap/Carousel';
export default function LandingPage() {
    return (
        <div className='sliders-container block lg:grid container my-4 space-y-3 lg:space-y-0 '>
            <div className='first-part w-full md:w-82  xl:w-100  lg:ml-2'  >
                <Carousel className='slider h-full' pause={"hover"} controls={false} fade={true}>
                    <Carousel.Item interval={5000}>
                        <img
                            className=" slider-img w-full h-full lg:w-82 xl:w-100"
                            src="images/slide1.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="w-full xl:w-100 h-full lg:w-82 slider-img"
                            src="images/slide2.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="m-0 side-sidebar  xl:h-full flex sm:flex-row lg:flex-col lg:gap-y-1 space-x-2 lg:space-x-0   ">
                <img src="./images/side-slide1.jpg" alt="" className=' ' />
                <img src="./images/side-slide2.jpg" alt="" className=' ' />
                <img src="./images/side-slide3.jpg" alt="" className=' ' />
            </div>

        </div>
    )
}
