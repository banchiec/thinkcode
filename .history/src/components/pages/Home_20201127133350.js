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
        /// esta funcion se realiza cada vez que se realiza una accion en el scroll 
        window.onscroll = () =>{
             console.log( contador = contador + 1)
        }
        if(contador === 49)
            alert(contador)
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
