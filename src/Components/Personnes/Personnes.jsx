import { useState } from 'react'
import './personnes.css'
export default function Personnes() {
    return(
        <>
        <div className='divPersonnes'>
            <div className='divPersonnesDiv1'>
                <img className='divPersonnesImg' src="../../src/assets/images/image-jeremy.png" alt="image de jeremey ce beau gosse afou" />
                <p className='divPersonnesP'>Report for</p>
                <h1 className='divPersonnesH1'>Jeremy <br />Robson</h1>
            </div>
            <div className='divPersonnesDiv2'>
                <h2 className='divPersonnesH2 topH2'>Daily</h2>
                <h2 className='divPersonnesH2'>Weekly</h2>
                <h2 className='divPersonnesH2'>Monthly</h2>
            </div>
        </div>
        </>
    )
}