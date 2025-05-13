import data from './data/data.json';
import './App.css'
import Personnes from './Components/Personnes/Personnes';
import CardsEnfant from './Components/CardsEnfant/CardsEnfant';
import Cards from './Components/CardsParent/cards';

function App() {
  

  return (
    <>
    <div className='divApp'>
      <Personnes/>
      <Cards/>
    </div>
    
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}

export default App
