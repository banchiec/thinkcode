import React, { Component } from 'react'
import './Buttonthink.css'
import {Link} from 'react-router-dom'

export default class Buttonthink extends Component {
    render() {
        return (
            <Link to ='sing-up'>
               <button className='btn'>Sign Up</button> 
            </Link>
        )
    }
}
