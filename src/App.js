import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AddTask } from './components/AddTask';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { About } from './components/About';

function App() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Learning',
    //   day: 'Mar 24 at 5:00 Am',
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: 'Practice',
    //   day: 'Mar 24 at 10:00 Am',
    //   reminder: true
    // },
    // {
    //   id: 3,
    //   text: 'Refresh',
    //   day: 'Mar 24 at 2:00 Pm',
    //   reminder: false
    // }
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()
    // console.log(data);
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    // console.log(data);
    return data;
  }

  const addTask = async (task) => {
    // console.log(task);
    // const id = Math.floor(Math.random() * 1000);
    // const newTask = { ...task, id };
    // setTasks([...tasks, newTask]);

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = async (id) => {
    // console.log(id);
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder }
      : task))
  }

  // let name = 'Sweety';
  return (
    <Router>
      <div className="container">
        {/* <h1>Hellooo {name} </h1> */}
        {/* <Header /> */}
        {/* <Header title="This is a" /> (passing props) */}
        <Header onAdd={() => setToggleAdd(!toggleAdd)} showAdd={toggleAdd} /> {/* <Header /> with default props */}
        <Route path="/" exact render={() => (
          <>
            {
              toggleAdd &&
              <AddTask onAdd={addTask} />
            }
            {
              tasks.length > 0
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
                : 'No tasks to show'
            }
          </>
        )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
