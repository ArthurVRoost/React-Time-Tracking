import { useState } from 'react';
import data from './data/data.json';
import './App.css'
import Personnes from './Components/Personnes/Personnes';
import Cards from './Components/CardsParent/cards';


function App() {
  const [activePeriod, setActivePeriod] = useState("weekly")

  return (
    <>
    <div className='divApp'>
      <Personnes activePeriod={activePeriod} setActivePeriod={setActivePeriod}/>
      <Cards activePeriod={activePeriod} data={data}/>
    </div>
    

    </>
  )
}

export default App
