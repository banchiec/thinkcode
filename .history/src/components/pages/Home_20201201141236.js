import React,{useEffect} from 'react'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'
import Slide from '../slide/Slide'
import InfoTeam from '../infoSection/InfoTeam'


// import '../sliderInfo/SliderInfo'


export default function Home() {

    useEffect(()=>{
    })
    return (
        <div>
        <InfoSection></InfoSection>
        <Pricing></Pricing>
        <Slide/>
        <InfoTeam/>
        <FormContact></FormContact>
        <Footer/>
            {/* <InfoSection></InfoSection> */}
            {/* <Pricing></Pricing> */}
            {/* <Slide/> */}
            {/* <Footer/> */}

           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
