import React,{useEffect} from 'react'
import '../sliderInfo/sliderInfo'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {

    useEffect(()=>{
    })
    return (
        <div>
            <InfoSection></InfoSection>
            <Pricing></Pricing>
            <InfoSection></InfoSection>
           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
