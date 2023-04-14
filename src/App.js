
import { useState } from 'react';
import './App.css';


  function App() {
  const [input, setInput]  = useState('');
  const [todolist, setTodolist] = useState([]);
  const [isEdititem, setIsEdititem] = useState(false);
  const [index,setIndex] = useState(null);



      function addTodo(){
     
      if (input  === "") {
        alert("please add todo");
        return;
      } 
      setTodolist([...todolist, input])
      console.log(todolist)
      setInput('')
    }
  
      const removeItem = (index) => {
      console.log(index)
      let newlist = [...todolist]
      newlist.splice(index,1);
      setTodolist(newlist)
    
  };

    const editItem = (index) => {
      setIsEdititem(true)
      setInput(todolist[index])
      setIndex(index)
     
    }

    function editTodo(){
      if(isEdititem ){
      let todos = [...todolist]
      todos[index] = input;
      setTodolist(todos);
      console.log(isEdititem);
      }
      setIsEdititem(false)
      setInput('');
      setIndex(null)
    }
   
  return (
    <div className="App">
        <center> <h1>ToDo App</h1>
        
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="add your new todo" />
         <button onClick={addTodo} > + </button>
       {isEdititem && <button onClick={editTodo} >update</button>}  
      
            <div>
              {todolist.length  ?
                todolist.map((item,index) => (
                <div>{item} <button onClick={()=>removeItem(index)} >delete</button>
                 <button onClick={()=>editItem(index)} >Edit</button>
               
                 </div>
               
                )) : <span>no todos</span>
              }
       
            </div>
        </center>
    </div>
  );
}

export default App;
