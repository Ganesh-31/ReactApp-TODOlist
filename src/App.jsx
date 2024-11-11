import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App(){
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const changeTask = e => {
    setTask(e.target.value);
  }
  const submitTask = e => {
    e.preventDefault();
    // console.log(task);
    // const newTask = [...taskList, task];
    const newTask = {
      id:uuidv4(),
      title: task,
      completed:false,
      createdAt: new Date(),
    };
    setTaskList([...taskList, newTask]);
    setTask('');
  }
  const removeTask = (id) =>{
    const updatedTaskList = taskList.filter((task) => task.id != id);
    setTaskList(updatedTaskList);
  }
  return(
    <div>
      <h1>ToDo-List</h1>
      <form onSubmit={submitTask}>
      <input type='text' value={task} onChange={changeTask} placeholder='Enter the task'></input>
      <input type='submit' value='AddTask' name='AddTask'></input>
      </form>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.title}<button onClick={() => removeTask(task.id)}>Completed</button>
          </li>
        )
      )}
      </ul>
    </div>
  );
}

export default App;
