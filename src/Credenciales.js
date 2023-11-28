import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBwvMkBJTFVe1HFCd3m0-PaT1Q7367FPLI",
    authDomain: "assets-5f517.firebaseapp.com",
    projectId: "assets-5f517",
    storageBucket: "assets-5f517.appspot.com",
    messagingSenderId: "753971791546",
    appId: "1:753971791546:web:736dee374a987a0754e483"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);