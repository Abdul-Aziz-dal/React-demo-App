import Header from './components/Header'
import Tasks from   './components/Tasks'
import AddTask from   './components/AddTask'
import {useState ,useEffect} from 'react'


function App() {
const [showAddTask , setShowAddTask]=useState(false)
const [tasks,setTasks]=useState([])

//any change occures it renders
useEffect(()=>{
 fetchTasks()
},[])

//fetching data from server
const fetchTasks= ()=>{
  fetch('http://localhost//taskTrakerApi.php')
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      setTasks(res)

    })
    .catch((error) => {
      console.error(error);
    });
}


//add task
const addTask =(task)=>{
const id= Math.floor(Math.random()*1000)+1
const newTask={id,...task}

setTasks([...tasks , newTask])
}


//delete task
const deleteTask=(id)=>{
setTasks(tasks.filter((task) => task.id !== id))
}


//reminder

const toggleReminder =(id)=>{
setTasks(tasks.map((task) => task.id===id?{...task,reminder:!task.reminder}:task))
}


  return (
    <div className="container">
     
     <Header title={'Task Tracker'} showAdd={showAddTask} onAdd={()=>setShowAddTask(!showAddTask)} />
    {showAddTask && <AddTask onAdd={addTask} /> } 
    { tasks.length> 0 ?(<Tasks tasks={tasks}  onDelete={deleteTask} 
    onToggle={toggleReminder} />) :('no Task to show') }


   </div>
  );
}



export default App









