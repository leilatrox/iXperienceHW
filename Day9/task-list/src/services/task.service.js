import {
  collection, addDoc,
  query, getDocs,
  doc, updateDoc,
  deleteDoc,
} from 'firebase/firestore'

import {db} from '../firebase/firebase';
import { Task } from '../models/task';

class TaskService{
  constructor() {
    this.collection = 'tasks';
  }
  async createTask(task) {
    const collRef = collection(db, this.collection);

    const docRef = await addDoc(collRef, {
      name: task.name,
      complete: task.complete,
    });

    task.id = docRef.id;
    return task;
  }

  async fetchTasks() {
    const collRef = collection(db, this.collection);
    const q = query(collRef);
    const queSnap = await getDocs(q);

    const tasks = [];
    queSnap.forEach((doc) => {
      const data = doc.data();
      const task = new Task(
        doc.id, data.name, data.complete
      );
      tasks.push(task);
    });
    return tasks;
  }

  async updateTask(task) {
    const docRef = doc(db, this.collection, task.id);
    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete
    });
    return task;
  }

  async deleteTask(taskId) {
    const docRef = doc(db, this.collection, taskId);
    await deleteDoc(docRef);
  }
  
}

const service = new TaskService();

export default service;