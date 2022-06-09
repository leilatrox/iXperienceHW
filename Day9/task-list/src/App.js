import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import TaskService from './services/task.service'

import Taskinput from './components/Taskinput'
import TaskTable from './components/TaskTable'

import { Task } from './models/task'

export default function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if (!tasks.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    const tasks = await TaskService.fetchTasks();
    setTasks(tasks);
  }

  async function onTaskCreate(name) {
    //create the task
    const task = await TaskService.createTask(new Task(null, name, false));
    //add the task to the tasks state
    setTasks([...tasks, task]);
  }

  async function onTaskCompleteToggle(id) {
    //toggle task's completed state
    const taskToToggle = tasks.find((task) => task.id === id);
    taskToToggle.complete = !taskToToggle.complete;
    await TaskService.updateTask(taskToToggle);
    //update tasks state
    setTasks(tasks.map((task) => {
      return task.id === id ? taskToToggle : task;
    }));
  }

  async function onTaskRemove(id) {
    //filter task with the id out
    await TaskService.deleteTask(id);
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
