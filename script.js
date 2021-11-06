// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBfAignBehr8S6uJWitkN4fwvcg_DvFWUo",
  authDomain: "rtv-v1.firebaseapp.com",
  databaseURL: "https://rtv-v1-default-rtdb.firebaseio.com",
  projectId: "rtv-v1",
  storageBucket: "rtv-v1.appspot.com",
  messagingSenderId: "654344743959",
  appId: "1:654344743959:web:ca32854ba0702e1289c052",
  measurementId: "G-4PDZ4PZPKB"  
});
  
const db = getFirestore();
const rotationRef = doc(db, "rotation", "position");

function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way
                rotation_degrees = Math.round(event.alpha);
                updateDoc(rotationRef, {
                  angle: rotation_degrees
                });
                  
  
            });
        }
    });
}