import React from 'react'
import './Buttonthink.css'
import {Link} from 'react-router-dom'

export default function Buttonthink() {
        return (
            <Link to ='sing-up'>
               <button className='btnthink'>Sign think</button> 
            </Link>
        )
}
