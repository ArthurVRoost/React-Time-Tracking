// IMPORTS
import { useState } from 'react';
import data from './data/data.json';
import './App.css'
import Personnes from './Components/Personnes/Personnes';
import Cards from './Components/CardsParent/cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
// FONCTIONS
function App() {
  const [activePeriod, setActivePeriod] = useState("weekly")
  // LIGHTMODE
  const [lightMode, setLightMode] = useState(false)
  const toggleTheme = () =>{
    // syntaxe pour basculer entre l'un et l'autre comme un toggle, permet d'utiliser la valeur mise a jour a chaque fois
    setLightMode(prev => !prev)
  }
  return (
    <>
    <div className={`${lightMode ? 'light-mode' : ''}`}>
      <FontAwesomeIcon className='fa-sun' icon={faSun} onClick={toggleTheme} />
      <div className="divApp">
        <Personnes activePeriod={activePeriod} setActivePeriod={setActivePeriod}/>
        {/* c'est grace au data={data} qu'on récupere les donnes json, les autres c'est pour determiner lequel est active et la fonction setActive */}
        <Cards activePeriod={activePeriod} data={data}/>
      </div>
    </div>
    
    

    </>
  )
}

export default App
