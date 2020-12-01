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
        /// esta funcion se realiza cada vez que se realiza una accion en el scroll 
            window.onscroll = function(){
                if(window.scrollY >132)
                    alert( 'vertical: ' + window.scrollY)
            }
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
