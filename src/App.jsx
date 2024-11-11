import { useState } from 'react';

function App(){
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const changeTask = e => {
    setTask(e.target.value);
  }
  const submitTask = e => {
    // e.preventDefault();
    // console.log(task);
    const newTask = [...taskList, task];
    setTaskList(newTask);
    setTask('');
  }
  const removeTask = (index) =>{
    const updatedTaskList = taskList.filter((_,i) => i != index);
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
        {taskList.map((task, index) => (
          <li key={index}>{task}<button onClick={() => removeTask(index)}>Completed</button></li>
        )
      )}
      </ul>
    </div>
  );
}

export default App;
