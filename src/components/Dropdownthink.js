import React, { useState} from 'react' 
import  {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import './Dropdownthink.css'

export default function Dropdownthink(){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
     return(
         <>
            <ul onClick={handleClick} className={ click ? 'dropdownthink-menu clicked' : 'dropdownthink-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key ={index}>
                            <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}></Link>
                            {item.title}
                        </li>
                    )
                })}

            </ul>
         </>
     )
}