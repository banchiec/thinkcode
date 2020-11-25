import React, { useState} from 'react' 
import { Buttonthink} from './Buttonthink'
import {Link} from 'react-router-dom'
import './Navbarthink.css'
import Dropdownthink from './Dropdownthink'

export default function Navbarthink(){
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
            <nav className="navbarthink">
                <Link to='/' className="navbar-logo">
                    thinkcode 
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
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                           Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdownthink/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                           Contact Us 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign up
                        </Link>
                    </li>
                </ul>
                <Buttonthink/>
            </nav>
        </>
    )

}