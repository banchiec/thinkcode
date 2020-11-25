import React  from 'react'
import './Buttonthink.css'
import {Link} from 'react-router-dom'

export function Buttonthink() {
        return (
            <Link to ='sing-up'>
               <button className='btnthink'>Sign </button> 
            </Link>
        )
}
