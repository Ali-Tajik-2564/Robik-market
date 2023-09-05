import React from 'react'
import "./TopBar.css"
import { Link } from 'react-router-dom'
export default function TopBar() {
    return (
        <div className="container">
            <span className='phone-number'>شماره تماس و مشاوره :‌09195729509 </span>
            <ul className='access-container'>
                <li>
                    <Link> صفحه نخست
                    </Link>
                </li>
                <li> <Link>درباره ما
                </Link>
                </li>
                <li>
                    <Link>
                        تماس با ما
                    </Link>
                </li>
            </ul>
        </div>
    )
}
