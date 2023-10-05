import React from 'react'
import HeaderPage from '../../component/HeaderPage/HeaderPage'
import { Datepicker, Input, initTE, Collapse, } from "tw-elements";
import Accordion from 'react-bootstrap/Accordion';
initTE({ Datepicker, Input, Collapse }, { allowReinits: true });

export default function Market() {
    return (
        <div>
            <HeaderPage title="فروشگاه روبیک مارکت" subtitle="هر آنچه نیاز دارید در این فروشگاه موجود است" route="خانه" />
            <div className='container mx-auto flex flex-row-reverse justify-between items-center p-4 bg-slate-50 h-screen '>
                <div className="w-1/4 h-full flex flex-col justify-start ">

                    <Accordion defaultActiveKey={['0']} alwaysOpen className='open:bg-none overflow-hidden'  >
                        <Accordion.Item eventKey="0" className='bg-primaryText   overflow-hidden'  >
                            <Accordion.Header >  <span className='text-mainPrimaryLight bg-none selection:backdrop-blur-none  text-lg font-md '>  گروه های محصولات </span> </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                <div className="w-3/4"></div>
            </div>
        </div>
    )
}
