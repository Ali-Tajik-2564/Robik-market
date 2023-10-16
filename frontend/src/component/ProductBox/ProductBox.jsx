import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProductBox.css"
export default function ProductBox({ img, title, children, route }) {
    return (
        <div className='box-container hover:opacity-75 transition-all duration-400 md:flex block'>
            <Card className='relative h-[22rem] w-[18rem]  bg-primaryText'>
                <Card.Img variant="top" style={{ height: '50%' }} src={`../images/${img}`} />
                <Card.Body>
                    <Card.Text>
                        <p className='text-sm text-gray-400 text-right font-thin'>{route}</p>
                    </Card.Text>

                    <Card.Title style={{ textAlign: 'end' }} className='text-base md:text-lg text-mainPrimary'>{title}</Card.Title>
                    <Card.Text>
                        {children}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
