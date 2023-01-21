import {send} from './socketProvider'

function Palette({colorState}) {
  const {activeColor,setActiveColor} = colorState
  return (
    <div className='palette'>
        <input value={activeColor} onChange={(e)=>setActiveColor(e.target.value)} type="color" />
        <button onClick={()=>send(activeColor)}>Click</button>
    </div>
  )
}

export default Palette