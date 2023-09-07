import React from 'react'
import "./LandingPage.css"
import Carousel from 'react-bootstrap/Carousel';
export default function LandingPage() {
    return (
        <div className='sliders-container'>
            <div className='first-part'  >
                <Carousel className='slider' pause={"hover"} controls={false} fade={true}>
                    <Carousel.Item interval={5000}>
                        <img
                            className=" slider-img w-100"
                            src="images/slide1.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="w-100 slider-img"
                            src="images/slide2.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div className=" side-sidebar ">
                <img src="./images/side-slide1.jpg" alt="" />
                <img src="./images/side-slide2.jpg" alt="" />
                <img src="./images/side-slide3.jpg" alt="" />
            </div>

        </div>
    )
}
