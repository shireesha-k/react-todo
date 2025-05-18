
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([]);
  

  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname];
      setTodolist(finalDolist);
    }else{
      alert("Todo name already exists..")
    }
    
    
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{

    return(
      <TodoListItem  value={value} kay={index} indexNumber={index} 
      todolist={todolist}
      setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/><button>Save</button>
      </form>
      <div className='outerDiv'>
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({value,indexNumber,todolist,setTodolist}){
  let [status,setStatus]=useState(false);
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>
      i!=indexNumber
    )
    setTodolist(finalData);
  }
  let checkStatus=()=>{
      setStatus(!status);
  }
  return(
    <li className={(status?'comletetodo':'')}onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
  )
}
