function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function login() {
  var userEmail = document.getElementById("email-field").value;
  var userPass = document.getElementById("email-field").value;

  window.alert(userEmail + " " + userPass);
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEc9KL1JLJQyLWqYMn5kO6OytbPvDLOKw",
  authDomain: "vasudha-2022-23.firebaseapp.com",
  databaseURL: "https://vasudha-2022-23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vasudha-2022-23",
  storageBucket: "vasudha-2022-23.appspot.com",
  messagingSenderId: "333093383398",
  appId: "1:333093383398:web:f95d3c52b54b4a333a9f27",
  measurementId: "G-4K6MFPLE4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);