import data from './data/data.json';
import './App.css'

function App() {
  

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
