import { db } from "../firebase/firebase.config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

export const addTodo = (userId, todo) =>
  addDoc(collection(db, "todos"), { ...todo, userId });

export const getTodos = async (userId) => {
  const snapshot = await getDocs(collection(db, "todos"));
  return snapshot.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(t => t.userId === userId);
};

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
