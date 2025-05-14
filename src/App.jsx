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
  const [lightMode, setLightMode] = useState(false)
  const toggleTheme = () =>{
    setLightMode(prev => !prev)
  }
  return (
    <>
    <div className={`${lightMode ? 'light-mode' : ''}`}>
    <FontAwesomeIcon className='fa-sun' icon={faSun} onClick={toggleTheme} />
    <div className="divApp">
      <Personnes activePeriod={activePeriod} setActivePeriod={setActivePeriod}/>
      <Cards activePeriod={activePeriod} data={data}/>
    </div>
    </div>
    
    

    </>
  )
}

export default App
