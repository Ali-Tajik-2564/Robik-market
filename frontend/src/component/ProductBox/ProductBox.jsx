import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProductBox.css"
export default function ProductBox({ img, title, children }) {
    return (
        <div className='box-container'>
            <Card style={{ width: '18rem', height: "22rem" }}>
                <Card.Img variant="top" style={{ height: '50%' }} src={`images/${img}`} />
                <Card.Body>

                    <Card.Title style={{ textAlign: 'end' }}>{title}</Card.Title>
                    <Card.Text>
                        {children}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
