// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiIaXHnKkK6oFEu9YeV6lDQeRv6kJirh4",
    authDomain: "tutorzone-8f3b4.firebaseapp.com",
    projectId: "tutorzone-8f3b4",
    storageBucket: "tutorzone-8f3b4.appspot.com",
    messagingSenderId: "969035818684",
    appId: "1:969035818684:web:3d8f220d0f42b7a76f12b9"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };