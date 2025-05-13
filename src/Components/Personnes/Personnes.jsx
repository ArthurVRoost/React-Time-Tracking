import { useState } from 'react'
import './personnes.css'
export default function Personnes({ activePeriod, setActivePeriod }) {
    const handlePeriodClick = (period) =>{
        setActivePeriod(period)
    }
    return(
        <>
        <div className='divPersonnes'>
            <div className='divPersonnesDiv1'>
                <img className='divPersonnesImg' src="../../src/assets/images/image-jeremy.png" alt="image de jeremey ce beau gosse afou" />
                <p className='divPersonnesP'>Report for</p>
                <h1 className='divPersonnesH1'>Jeremy <br />Robson</h1>
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