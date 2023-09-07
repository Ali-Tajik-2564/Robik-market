import React, { useState } from 'react'
import "./Section.css"
export default function Section({ names }) {
    const [activeLink, setActiveLink] = useState("")
    return (
        <div className='section-container'>
            {names.map(name => (

                <>
                    {
                        activeLink === name.title ? (
                            <span className="section-items active-link">
                                {name.title}
                            </span>
                        ) : (
                            <span className="section-items" onClick={event => setActiveLink(event.target.__reactProps$ixor9428gz
                                .children)}>
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
