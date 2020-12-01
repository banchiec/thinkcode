import React,{useState,useEffect} from 'react'
import '../efectos/controlScroll'
import InfoSection from '../infoSection/InfoSection'
import Pricing from '../pricing/Pricing'

export default function Home() {

    const [click,setClick] = useState();
    useEffect(()=>{
        controlScroll()
    })
    const controlScroll = () =>{
        let contador = 0
        
        window.onscroll = () =>{
             console.log(contador + 1)
        }
        console.log(contador)
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
