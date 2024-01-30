import React,{useState} from 'react'

const Task = ({task, onToggle, onRemove, onEdit}) => {
    const [isEditing, setIsEditing]= useState(false);
    const [editedText, setEditedText]= useState(task.text);

    function handleEdit()
    {
        onEdit(task.id,editedText);
        setIsEditing(false);
    }
  return (
    <div className='task'>
    <li>
        <input type='checkbox'
        checked={task.completed}
        onChange={()=>onToggle(task.id)}
        />
        {
            isEditing ?
            (
                <div>
                    <input type='text'
                    value={editedText}
                    onChange={(e)=>setEditedText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            )
            :(
                <span style={{textDecoration : task.completed?'line-through':'none'}}>
                    {task.text}
                </span>
                
            )
        }
        <button onClick={()=>setIsEditing(true)}>Edit</button>
        <button onClick={()=>onRemove(task.id)}>Delete</button>
        </li>
    </div>
  )
}

export default Task;