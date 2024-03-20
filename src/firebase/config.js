// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZzJMRS4E05TS88uqfP22wPaZRhrZiFJ4",
  authDomain: "fashionhubprojectreact.firebaseapp.com",
  projectId: "fashionhubprojectreact",
  storageBucket: "fashionhubprojectreact.appspot.com",
  messagingSenderId: "47688968592",
  appId: "1:47688968592:web:7cae664a18763bd9d1eb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);