// IMPORTS
import { useState } from "react";
import './cards.css'
import CardsEnfant from "../CardsEnfant/CardsEnfant";
import Work from "/src/assets/images/icon-work.svg";
import Play from "/src/assets/images/icon-play.svg";
import Study from "/src/assets/images/icon-study.svg";
import Exercise from "/src/assets/images/icon-exercise.svg";
import Social from "/src/assets/images/icon-social.svg";
import SelfCare from "/src/assets/images/icon-self-care.svg";
// FONCTIONS
export default function Cards({activePeriod, data}) {
    const activityImages = {
        "Work": (`${Work}`),
        "Play": (`${Play}`),
        "Study": (`${Study}`),
        "Exercise": (`${Exercise}`),
        "Social": (`${Social}`),
        "Self Care": (`${SelfCare}`)
    }
    // SWITCH pour afficher le bon texte dependant de quel period est active
    const getDescription = (activity, period) =>{
        const tempsPrecedent = activity.timeframes[period].previous
        let timeframe;
        switch(period) {
            case "daily":
                timeframe= "Yesterday";
                break;
            case "weekly":
                timeframe = "Last Week";
                break;
            case "monthly":
                timeframe = "Last Month"
                break;
            default:
                timeframe = "Previous"
        }
        return `${timeframe} - ${tempsPrecedent}hrs`
    }
    return(
        <>
        <div className="divCards1">
            {/* .map va boucler sur chaque element pour créer les 6 cartes grace a l'index */}
            {data.map((activity, index)=>{
                // sans .replace() la carte self-care marcherait pas
                const activityClass = activity.title.toLowerCase().replace(" ", "-");
                return(
                    <CardsEnfant key={index} background={`divEnfantDiv1 ${activityClass}`} icon="divEnfantImg" image={activityImages[activity.title]} titre={activity.title} heures={`${activity.timeframes[activePeriod].current}hrs`} description={getDescription(activity, activePeriod)} />
                )
            })}
        </div>

        
        </>
    )
}