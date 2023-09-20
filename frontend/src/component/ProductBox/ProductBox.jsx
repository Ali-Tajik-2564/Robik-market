import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProductBox.css"
export default function ProductBox({ img, title, children, route }) {
    return (
        <div className='box-container hover:opacity-75 transition-all duration-400 '>
            <Card style={{ width: '18rem', height: "22rem", display: "relative", backgroundColor: "#f1f5f9" }}>
                <Card.Img variant="top" style={{ height: '50%' }} src={`images/${img}`} />
                <Card.Body>
                    <Card.Text>
                        <p className='text-sm text-gray-400 text-right font-thin'>{route}</p>
                    </Card.Text>

                    <Card.Title style={{ textAlign: 'end' }}>{title}</Card.Title>
                    <Card.Text>
                        {children}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
