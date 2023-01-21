import {useState} from 'react'
import {send} from './socketProvider'

function Palette({activeColor}) {
    const [color,setColor] = useState('#fff')
  return (
    <div className='palette'>
        <input value={activeColor} onChange={(e)=>setColor(e.target.value)} type="color" />
        <button onClick={()=>send(color)}>Click</button>
    </div>
  )
}

export default Palette