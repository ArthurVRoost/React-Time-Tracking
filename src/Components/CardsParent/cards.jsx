import { useState } from "react";
import './cards.css'
import CardsEnfant from "../CardsEnfant/CardsEnfant";
export default function Cards() {
    return(
        <>
        <div className="divCards1">
            <CardsEnfant background="divEnfantDiv1 work" icon="divEnfantImg" image="../../src/assets/images/icon-work.svg" titre="Work" heures="32hrs" description="Last Week - 36hrs" />
            <CardsEnfant background="divEnfantDiv1 play"  image="../../src/assets/images/icon-play.svg" titre="Play" heures="10hrs" description="Last Week - 8hrs" />
            <CardsEnfant background="divEnfantDiv1 study"  image="../../src/assets/images/icon-study.svg" titre="Study" heures="4hrs" description="Last Week - 7hrs" />
        </div>
        <div className="divCards2">   
            <CardsEnfant background="divEnfantDiv1 exercise"  image="../../src/assets/images/icon-exercise.svg" titre="Exercise" heures="4hrs" description="Last Week - 5hrs" />
            <CardsEnfant background="divEnfantDiv1 social"  image="../../src/assets/images/icon-social.svg" titre="Social" heures="5hrs" description="Last Week - 10hrs" />
            <CardsEnfant background="divEnfantDiv1 self-care"  image="../../src/assets/images/icon-self-care.svg" titre="Self Care" heures="2hrs" description="Last Week - 2hrs" />
        </div>

        
        </>
    )
}