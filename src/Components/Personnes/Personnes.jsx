import { useState } from 'react'
import './personnes.css'
export default function Personnes() {
    return(
        <>
        <div className='divPersonnes'>
            <div className='divPersonnesDiv1'>
                <img src="../../src/assets/images/image-jeremy.png" alt="" />
                <h3>Report for</h3>
                <h1>Jeremy <br />Robson</h1>
            </div>
            <div className='divPersonnesDiv2'>
                <h2>Daily</h2>
                <h2>Weekly</h2>
                <h2>Monthly</h2>
            </div>
        </div>
        </>
    )
}