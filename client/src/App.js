import { useEffect,useState } from 'react';
import './App.css';
import Palette from './components/Palette';
import {init,subscribe} from './components/socketProvider'
function App() {

  const [activeColor,setActiveColor] = useState('#fff')

  useEffect(()=>{
    init()
    subscribe((color)=>{
      setActiveColor(color)
    })
  },[])

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <Palette activeColor={activeColor}/>
      <h1>{activeColor}</h1>
    </div>
  );
}

export default App;
