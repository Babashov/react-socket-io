import {useState} from 'react'
import {send} from './socketProvider'

function Palette() {
    const [color,setColor] = useState('#fff')
  return (
    <div className='palette'>
        <input value={color} onChange={(e)=>setColor(e.target.value)} type="color" />
        <button onClick={()=>send(color)}>Click</button>
        <br/><br/>
        {color}
    </div>
  )
}

export default Palette