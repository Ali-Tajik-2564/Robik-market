import React, { useState } from 'react'
import "./Section.css"
export default function Section({ names }) {
    const [activeLink, setActiveLink] = useState(names[0].title)
    return (
        <div className='section-container '>
            {names.map(name => (

                <>
                    {
                        activeLink === name.title ? (
                            <span className="section-items active-link p-1 lg:p-2 text-base md:text-2xl">
                                {name.title}
                            </span>
                        ) : (
                            <span className="section-items p-1 lg:p-2 text-lg  md:text-2xl font-normal md:font-medium" onClick={event => setActiveLink(name.title)}>
                                {name.title}
                            </span >
                        )
                    }

                </>
            ))
            }

        </div >
    )
}
