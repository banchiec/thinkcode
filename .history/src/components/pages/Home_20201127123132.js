import React from 'react'
import '../efectos/controlScroll'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {
    const controlScroll = () => {
        
        console.log("entramos a la consola")
    }
    const handleClick = () => {
        console.log("entramos")
    }
    return (
        <div>
            <InfoSection></InfoSection>
            <Pricing >
            </Pricing>
            <InfoSection></InfoSection>
           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
