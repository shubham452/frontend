import React,{ useState } from 'react';

const TodoForm = ({ onAdd }) => {
    const [newTask, setNewTask]= useState('');

    const addTask=()=>{
      if(newTask!== ''){
            onAdd(newTask);
            setNewTask('');
        }
    };

  return (
    <div>
        <input
         type="text"
         placeholder="Enter the task"
         value={newTask}
         onChange={(e)=> setNewTask(e.target.value)}
         />
        <button onClick={addTask}> Submit</button>
    </div>
  )
}

export default TodoForm;