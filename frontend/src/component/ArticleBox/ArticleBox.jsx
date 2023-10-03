import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ArticleBox({ img, title, date, children }) {
    return (
        <div className='box-container   '>
            <Card className='w-[26rem] h-[33rem] bg-primaryText border-0 relative hover:opacity-75 ease-in transition-all duration-700' >
                <Card.Img variant="top" src={`images/${img}`} className='h-[45%] rounded-2 hover:opacity-75 transition-all ease-in duration-700' />
                <Card.Body>
                    <Card.Text>
                        <p className='text-lg text-gray-400 text-center font-thin my-2'>{date}</p>
                    </Card.Text>

                    <Card.Title className='text-mainPrimary my-4 text-2xl text-center' >{title}</Card.Title>
                    <Card.Text>
                        {children}

                        <span className='flex w-full justify-center overflow-visible text-mainPrimaryLight  cursor-pointer mt-4 mr-4 text-lg group '>
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
