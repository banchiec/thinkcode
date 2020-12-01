import React from 'react'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {
    const element = document.querySelector('.card-pricing');
    element.classList.add('animate__animated','animate__slideOutRight');
    return (
        <div>
            <InfoSection></InfoSection>
            <Pricing></Pricing>
            <InfoSection></InfoSection>
           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
