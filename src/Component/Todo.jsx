import {React,useState} from 'react'
import "./Todo.css"
const Todo = () => {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const [error, setError] = useState(true)
    const [com, setComp] = useState(true)
    const handlechange=(e)=>{
        e.preventDefault();
        setTask(e.target.value)
    }

    const AddTask=(e)=>{
        if(task !== ""){
            const taskdetails={
                id: Math.floor(Math.random()*1000),
                isComplete: false,
                value: task

            }
            setTaskList([...taskList,taskdetails])
            setError('')
        }else{
            setError('Inputbox must not be empty')
        }
        setTask('')
        
       // console.log('tasklist', taskList)
       
    }
    const deletTask =(e,id)=>{
        e.preventDefault();
        setTaskList(taskList.filter((c)=> c.id != id))
    }
    const CompletTask=(e, id)=>{
        e.preventDefault();
        const Index = taskList.findIndex(f=> f.id == id)

        const newTasklist = [...taskList]

        newTasklist[Index]={
            ...newTasklist[Index],
            isComplete: com,
        }

        setTaskList(newTasklist);
    }
  return (
    <div className='todowrapper'>
   <header>
    <h1 className=''>Todo List</h1>

    <div className="inpubtn">
    <input type="text"
    placeholder='Add Task...'
    name="text"
    id="text"
    value={task}
    onChange={(e)=>handlechange(e)}
    />
    <button
    className='btnadd'
    onClick={AddTask}
    >Add</button>
</div>
<p className='err'>{error}</p>
</header>     
    <main>
        <form action="">
    {taskList != []?
    <ul>
       {taskList.map((t,i)=>(
        <li key={i} className='todo'> 
        <div className="left">
            <input type="checkbox" checked={t.isComplete} id="" />
           <li className={`${ t.isComplete?'linet':'text'}`}
           >{t.value}
           </li>
           </div>
           <div className="comdel">
        <button 
        onClick={(e)=>{
            CompletTask(e, t.id) 
            setComp(!com)}}
            className={`${t.isComplete?'cancelcomplete':'complete'}`}>Completed</button>
        <button onClick={(e)=>deletTask(e, t.id)}>Delete</button>
        </div>
        </li>
       ))}
    </ul>
   :null }
   </form>
   </main>
       
    </div>
  )
}

export default Todo