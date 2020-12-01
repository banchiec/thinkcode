import React,{useState} from 'react'
import '../efectos/controlScroll'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {

    const [click,setClick] = useState();
    const controlScroll = () => {
        
        console.log("entramos a la consola")
    }
    const handleClick = () => {
        console.log("entramos")
    }
    return (
        <div>
            <InfoSection></InfoSection>
            <Pricing  onClick={setClick()}>
                {
                }
            </Pricing>
            <InfoSection></InfoSection>
           {/* <h1 className='consulting' >Thinkcode</h1> */}
        </div>
    )
}
