import { useState } from 'react';
import './App.css';
import Task from './Task';
import Form from './Form';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Выучить JavaScript", done: false },
    { id: 2, text: "Познакомиться с React", done: false },
    { id: 3, text: "Найти работу", done: false }
  ]);

  let addTask = text => {
    setTasks([...tasks, { text }]);


  };

  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done =newTask[index].done ? false : true;

    setTasks(newTask);

  };

  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }

  return (
    <div className="App">
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            donetask={doneTask}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;