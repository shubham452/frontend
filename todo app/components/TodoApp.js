import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

const TodoApp = () => {
    const [tasks, setTasks]= useState([]);

    const addTask=(text)=>{
       
        setTasks([...tasks, {id:Date.now(), text, completed:false}])
        console.log(tasks);
    }
    const toggleTask=(id)=>{
        setTasks(
            tasks.map((task)=>
            id===task.id ? {...task,completed:!task.completed}:task)
        );
    };
    const removeTask=(id)=>{
        setTasks(
            tasks.filter((task)=>id!==task.id)
        );
    };
    const editTask= (id, newText) =>
    {
        setTasks(
            tasks.map((task)=> id===task.id ? {...task, text:newText} : task)
        );
    };
    console.log(tasks);
  return (
    <div>
        <h1>TODO APP</h1>
        <TodoForm onAdd={addTask}/>
        <TodoList 
        tasks={tasks}
        onToggle = {toggleTask} 
        onEdit = {editTask} 
        onRemove = {removeTask}/>
    </div>
  );
};

export default TodoApp