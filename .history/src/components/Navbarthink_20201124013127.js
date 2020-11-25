import React, { useState} from 'react'
import {Buttonthink} from './Buttonthink'
import {Link} from 'react-router-dom'
import './Navbarthink.css'
import Dropdownthink from './Dropdownthink'

function Navbarthink(){
    return(
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    EPIC 
                </Link>
            </nav>
        </>
    )

}