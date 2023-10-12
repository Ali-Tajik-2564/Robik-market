import React from 'react'
import "./TopBar.css"
import { Link } from 'react-router-dom'
export default function TopBar() {


    return (
        <div className="topbar-container m-0 px-2 md:px-14 text-xs md:text-base font-thin md:font-normal">
            <span className='phone-number'>شماره تماس و مشاوره :‌09195729509 </span>
            <ul className='access-container gap-x-3 md:gap-x-4 s'>
                <li >
                    <Link to="/"> صفحه نخست
                    </Link>
                </li>

                <li> <button onClick={() => scrollTo(0, 3200)}>درباره ما
                </button>
                </li>

            </ul>
        </div>
    )
}
