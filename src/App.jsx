import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/todoSlice'


const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substring(7),
        title: newTaskTitle
      };
      dispatch(addTask(newTask));
      setNewTaskTitle('');
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={newTaskTitle} 
          onChange={(e) => setNewTaskTitle(e.target.value)} 
          placeholder="Enter task title" 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
