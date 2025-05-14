// IMPORTS
import { useState } from 'react'
import './personnes.css'
import Photo from "../../assets/images/image-jeremy.png"
// FONCTIONS
export default function Personnes({ activePeriod, setActivePeriod }) {
    const handlePeriodClick = (period) =>{
        setActivePeriod(period)
    }
    return(
        <>
        <div className='divPersonnes'>
            <div className='divPersonnesDiv1'>
                <img className='divPersonnesImg' src={Photo} alt="image de jeremey ce beau gosse afou" />
                <div className='personneDiv'>
                    <p className='divPersonnesP'>Report for</p>
                    <h1 className='divPersonnesH1'>Jeremy <br />Robson</h1>
                </div>
                
            </div>
            <div className='divPersonnesDiv2'>
                <h2 className= "divPersonnesH2" onClick={()=> handlePeriodClick("daily")} >Daily</h2>
                <h2 className= "divPersonnesH2" onClick={()=> handlePeriodClick("weekly")} >Weekly</h2>
                <h2 className= "divPersonnesH2" onClick={()=> handlePeriodClick("monthly")} >Monthly</h2>
            </div>
        </div>
        </>
    )
}