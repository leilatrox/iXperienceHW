import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Task } from "../models/task";

class TaskService {
  constructor() {
    this.collection = "tasks";
  }

  async createTask(task) {
    const collRef = collection(db, this.collection);

    const docRef = await addDoc(collRef, task.toJson());

    task.id = docRef.id;
    return task;
  }

  async fetchTasks(user) {
    const collRef = collection(db, this.collection);
    const q = query(collRef, where("userID", "==", user.uid));
    const queSnap = await getDocs(q);

    const tasks = [];
    queSnap.forEach((doc) => {
      tasks.push(Task.fromFirebase(doc));
    });
    return tasks;
  }

  async updateTask(task) {
    const docRef = doc(db, this.collection, task.id);
    await updateDoc(docRef, task.toJson());
    return task;
  }

  async deleteTask(taskId) {
    const docRef = doc(db, this.collection, taskId);
    await deleteDoc(docRef);
  }
}

const service = new TaskService();

export default service;
