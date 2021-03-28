import { useState } from 'react';
import { AddTask } from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learning',
      day: 'Mar 24 at 5:00 Am',
      reminder: true
    },
    {
      id: 2,
      text: 'Practice',
      day: 'Mar 24 at 10:00 Am',
      reminder: true
    },
    {
      id: 3,
      text: 'Refresh',
      day: 'Mar 24 at 2:00 Pm',
      reminder: false
    }
  ]);

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000);
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder }
      : task))
  }

  // let name = 'Sweety';
  return (
    <div className="container">
      {/* <h1>Hellooo {name} </h1> */}
      {/* <Header /> */}
      {/* <Header title="This is a" /> (passing props) */}
      <Header onAdd={() => setToggleAdd(!toggleAdd)} showAdd={toggleAdd} /> {/* <Header /> with default props */}
      {
        toggleAdd &&
        <AddTask onAdd={addTask} />
      }
      {
        tasks.length > 0
          ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
          : 'No tasks to show'
      }
    </div>
  );
}

export default App;
