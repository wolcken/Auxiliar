// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwvMkBJTFVe1HFCd3m0-PaT1Q7367FPLI",
    authDomain: "assets-5f517.firebaseapp.com",
    projectId: "assets-5f517",
    storageBucket: "assets-5f517.appspot.com",
    messagingSenderId: "753971791546",
    appId: "1:753971791546:web:736dee374a987a0754e483"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;