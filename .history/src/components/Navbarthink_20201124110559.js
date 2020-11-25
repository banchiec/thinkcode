import React, { useState} from 'react'
import {Buttonthink} from './Buttonthink'
import {Link} from 'react-router-dom'
import './Navbarthink.css'
import Dropdownthink from './Dropdownthink'

export default function Navbarthink(){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    EPIC 
                </Link>
            <div className='menu-icon'>
               <i className={click ? 'fas fa-times' : 'fas fa-user-plus'}
               /> 
            </div>
            </nav>
        </>
    )

}