import {
  collection, addDoc,
  query, getDocs,
} from 'firebase/firestore'

import {firestore} from '../firebase/firebase';

class TaskService{
  constructor() {
    this.collection = 'tasks';
  }
  async createTask(task) {
    const collRef = collection(firestore, this.collection);

    const docRef = await addDoc(collRef, {
      name: task.name,
      complete: task.complete
    });

    task.id = docRef.id;
    return task;
  }

  async fetchTasks() {
    const collRef = collection(firestore, this.collection);
    const q = query(collRef);
    const queSnap = await getDocs(q);

    queSnap.docs;
  }
}

const service = new TaskService();

export default service;