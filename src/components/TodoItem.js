import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


/* the `TodoItem` component represents and handles individual tasks within the list.*/
function TodoItem(props) {
    const {task, deleteTask, toggleCompleted} = props;
    const handleChange = () => {
        toggleCompleted(task.id);
    }
    
    return(
        <div className='todo-item'>
            <input 
            type="checkbox"
            checked={task.completed}
            onClick={handleChange}
            />
            <p style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.text}</p>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTask(task.id)} />
        </div>
    )
    }


export default TodoItem;