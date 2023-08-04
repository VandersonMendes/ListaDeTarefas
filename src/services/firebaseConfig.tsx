import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0HnAe5k2cbuP8kLHtzZ57FNrEv_7l3uw",
  authDomain: "listadetarefas-b9f81.firebaseapp.com",
  projectId: "listadetarefas-b9f81",
  storageBucket: "listadetarefas-b9f81.appspot.com",
  messagingSenderId: "354425211168",
  appId: "1:354425211168:web:06d050b94fa7495416af45",
  measurementId: "G-6H097M5R47"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);