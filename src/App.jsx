import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const initialtodo=['wait']
  const [todo, settodo] = useState(initialtodo)
  const [inputext, setInputext] = useState([])
  const [err, setErr] = useState('')
  const [cancel, setCancel] = useState(false)
  const [display, setDisplay] = useState(true)
  const handleclick =(e)=>{
    e.preventDefault();
    if(inputext.length<1){
      setErr('Input box must not be empty')
    }else{
      setErr('')
  settodo(todo.concat(inputext))
  setInputext('');
  }
}
  return (
    <div className="body">
     <main>
    <h1 className='text-[2rem] w-max m-auto'>Todo List</h1>
       <form action="">
    <div className="inbut">
    <input 
    type="text" 
    value={inputext}
    onChange={(e)=>setInputext(e.target.value)}/>
    <button type='submit' className='btnadd' onClick={handleclick}>Add</button>
    </div>
<div className={`err`}>{err}</div>
    <div className="lists"
    >
      {todo.map((t,i)=>(
    <div
     className={`todo ${cancel? 'cancel':''}`}
     onClick={()=>setCancel(!cancel)}
    key={i}
    >
     <input type="checkbox" id="" checked={cancel} />
      <p className={`${cancel&&'lineover'}`}>{t}</p>
      <img src="/media/del.png" alt=""
      onClick={()=>setDisplay(!display)} />
    </div>

      ))}

    </div>
       </form>
     </main>
    </div>
  )
}

export default App
