import {
  collection, addDoc
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
}

const service = new TaskService();

export default service;