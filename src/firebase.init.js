import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBEcKf0fLX9XDLMJ9SkkB0IWfCe7kbJEbM",
    authDomain: "genius-car-service-791e7.firebaseapp.com",
    projectId: "genius-car-service-791e7",
    storageBucket: "genius-car-service-791e7.appspot.com",
    messagingSenderId: "299509047282",
    appId: "1:299509047282:web:5d3b41f405d149cbb7556b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
