// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJiLjAfU2Atp9AnvM2MyiJAtjpdTGcEw",
  authDomain: "the-news-dragon-ddcda.firebaseapp.com",
  projectId: "the-news-dragon-ddcda",
  storageBucket: "the-news-dragon-ddcda.appspot.com",
  messagingSenderId: "474113357341",
  appId: "1:474113357341:web:75e14b3ca4cc26548878f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;