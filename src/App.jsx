import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './Component/Todo'

function App() {
    const initialtodo=['wait']
  const [todo, settodo] = useState(initialtodo)
  const [inputext, setInputext] = useState([])
  const [err, setErr] = useState('')
  const [cancel, setCancel] = useState(0)
  const [display, setDisplay] = useState(0)
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
const newlist = [...todo ]
  return (
    <div className="body">
    
    
     <Todo/>
    </div>
  )
}

export default App


// https://ljy9407.medium.com/build-a-todo-list-with-react-js-2ae075bfc355#:~:text=Build%20a%20Todo%20List%20with%20React%20Js%201,a%20basic%20form.%202%202%29%20Build%20a%20component