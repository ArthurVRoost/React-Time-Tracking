import { useState } from "react";
import './cardsenfant.css'

export default function CardsEnfant({titre, heures, description, background, icon, image}) {
    return(
        <>
        <div className="divEnfant">
            <div className={background} >
            <img className={icon} src={image} alt="" />
            </div>
            <div className="divEnfantDiv2">
                <div className="divEnfantDiv2Div">
                    <h3 className="divEnfantH3">{titre}</h3>
                    <span className="divEnfantspan">...</span>
                </div>
                <h1 className="divEnfantH1"> {heures} </h1>
                <p className="divEnfantP">{description}</p>
            </div>
        </div>
        </>
    )
}