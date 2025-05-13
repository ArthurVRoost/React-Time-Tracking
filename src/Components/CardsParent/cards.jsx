// IMPORTS
import { useState } from "react";
import './cards.css'
import CardsEnfant from "../CardsEnfant/CardsEnfant";
// FONCTIONS
export default function Cards({activePeriod, data}) {
    const activityImages = {
        "Work": "../../src/assets/images/icon-work.svg",
        "Play": "../../src/assets/images/icon-play.svg",
        "Study": "../../src/assets/images/icon-study.svg",
        "Exercise": "../../src/assets/images/icon-exercise.svg",
        "Social": "../../src/assets/images/icon-social.svg",
        "Self Care": "../../src/assets/images/icon-self-care.svg"
    }

    const getDescription = (activity, period) =>{
        const previousTime = activity.timeframes[period].previous
        let LeTemps;
        switch(period) {
            case "daily":
                LeTemps= "Yesterday";
                break;
            case "weekly":
                LeTemps = "Last Week";
                break;
            case "monthly":
                LeTemps = "Last Month"
                break;
            default:
                LeTemps = "Previous"
        }
        return `${LeTemps} - ${previousTime}hrs`
    }
    return(
        <>
        <div className="divCards1">
            {data.map((activity, index)=>{
                const activityClass = activity.title.toLowerCase().replace(" ", "-");
                return(
                    <CardsEnfant key={index} background={`divEnfantDiv1 ${activityClass}`} icon="divEnfantImg" image={activityImages[activity.title]} titre={activity.title} heures={`${activity.timeframes[activePeriod].current}hrs`} description={getDescription(activity, activePeriod)} />
                )
            })}
        </div>

        
        </>
    )
}