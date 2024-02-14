import React, {useState} from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

uuidv4();

/*The `TodoList` component manages the state of the tasks*/

function TodoList () {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    
    const addTask = (text) => {
        const newTask = {
            id: uuidv4(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))

    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    }



    return (
        <div className="todo-list">
            <h1>My To-Do List</h1>
            <div className="task-input">      
                <input 
                placeholder="What needs to be done today?"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => addTask(text)}>Add
                </button>
            </div>
            {tasks.map((task, index) => 
                (<TodoItem 
                key={index}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                />
                ))}
                
        </div>
    );
}
export default TodoList;
