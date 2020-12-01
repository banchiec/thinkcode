import React,{useState,useEffect} from 'react'
import '../efectos/controlScroll'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {

    const [click,setClick] = useState();
    useEffect(()=>{
        controlScroll()
    })
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
