import React, { useState} from 'react'
import {Buttonthink} from './Buttonthink'
import {Link} from 'react-router-dom'
import './Navbarthink.css'
import Dropdownthink from './Dropdownthink'

export default function Navbarthink(){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () = setClick(false)

    return(
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    EPIC 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                    /> 
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}