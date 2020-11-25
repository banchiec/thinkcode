import React, { useState} from 'react'
import {Buttonthink} from './Buttonthink'
import {Link} from 'react-router-dom'
import './Navbarthink.css'
import Dropdownthink from './Dropdownthink'

export default function Navbarthink(){
    return(
        <>
            <nav className="navbar">
                <a href='/' className="navbar-logo">
                    EPIC 
                </a>
            </nav>
        </>
    )

}