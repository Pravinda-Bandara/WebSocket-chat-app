// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEx0iI1jMfRDdAy3eX5km7UnmBdeojzLY",
    authDomain: "web-socket-fd9e6.firebaseapp.com",
    projectId: "web-socket-fd9e6",
    storageBucket: "web-socket-fd9e6.appspot.com",
    messagingSenderId: "66182590318",
    appId: "1:66182590318:web:0a2ea750ca4983b2ef1b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth,app}