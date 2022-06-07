import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Taskinput from './components/Taskinput'
import TaskTable from './components/TaskTable'

import { Task } from './models/task'

export default function App() {
  const [tasks, setTasks] = useState([]);
  
  function onTaskCreate(name) {
    //create the task
    const task = new Task(new Date().getTime(), name, false);
    //add the task to the tasks state
    setTasks([...tasks, task]);
  }

  function onTaskCompleteToggle(id) {
    //toggle task's completed state
    const taskToToggle = tasks.find((task) => task.id === id);
    taskToToggle.complete = !taskToToggle.complete;
    //update tasks state
    setTasks(tasks.map((task) => 
      {return task.id === id ? taskToToggle : task}))
  }

  function onTaskRemove(id) {
    //filter task with the id out
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  return (
    <div className ='container my-4'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <p>Our simple task list</p>
        <Taskinput onTaskCreate = {onTaskCreate} />
        <TaskTable onTaskCompleteToggle= {onTaskCompleteToggle}
          onTaskRemove = {onTaskRemove}
          tasks = {tasks}/>
      </div>
    </div>
  )
}
