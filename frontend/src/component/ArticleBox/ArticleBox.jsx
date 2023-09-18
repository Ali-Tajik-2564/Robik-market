import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ArticleBox({ img, title, date, children }) {
    return (
        <div className='box-container   '>
            <Card className='hover:opacity-75 ease-in transition-all duration-700' style={{ width: '26rem', height: "33rem", display: "relative", backgroundColor: "#f9fafba", border: "none" }}>
                <Card.Img variant="top" style={{ height: '45%' }} src={`images/${img}`} className='rounded-2 hover:opacity-75 transition-all ease-in duration-700' />
                <Card.Body>
                    <Card.Text>
                        <p className='text-lg text-gray-400 text-center font-thin my-2'>{date}</p>
                    </Card.Text>

                    <Card.Title style={{ textAlign: 'center', fontSize: "1.5rem", marginTop: "1rem", marginBottom: "1rem" }} >{title}</Card.Title>
                    <Card.Text>
                        {children}

                        <span className='flex w-full justify-center overflow-visible text-yellow-500  cursor-pointer mt-4 mr-4 text-lg group '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>

                            بیشتر بخوانید</span>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
