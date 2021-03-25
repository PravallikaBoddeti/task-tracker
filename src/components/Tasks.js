// import { useState } from 'react';
// const tasks = [
//   {
//     id: 1,
//     text: 'Learning',
//     day: 'Mar 24 at 5:00 Am',
//     reminder: true
//   },
//   {
//     id: 2,
//     text: 'Practice',
//     day: 'Mar 24 at 10:00 Am',
//     reminder: true
//   },
//   {
//     id: 3,
//     text: 'Refresh',
//     day: 'Mar 24 at 2:00 Pm',
//     reminder: false
//   }
// ]

import { Task } from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)}
    </>
  )
}

export default Tasks
