import React,{useEffect} from 'react'
import '../sliderInfo/SliderInfo'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'
import Footer from '../footer/Footer'
import Slide from '../slide/Slide'

export default function Home() {

    useEffect(()=>{
    })
    return (
        <div>
            <InfoSection></InfoSection>
            {/* <Pricing></Pricing> */}
            {/* <Slide/> */}
            <Footer/>

           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
