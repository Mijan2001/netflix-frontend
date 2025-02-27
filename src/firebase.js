import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { initializeApp } from 'firebase/app'; // Import the dialog component

const firebaseConfig = {
    apiKey: 'AIzaSyC_9ARAc4f07y9hMme2NjeC75Ws0hmml5k',
    authDomain: 'basic-authintication.firebaseapp.com',
    projectId: 'basic-authintication',
    storageBucket: 'basic-authintication.firebasestorage.app',
    messagingSenderId: '590468893860',
    appId: '1:590468893860:web:f919bcf2eb5da865aa6a31',
    measurementId: 'G-JRMW6H19FW'
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// if (auth?.currentUser?.email) {
//     return true;
// } else {
//     console.log('User is signed out');
//     return false;
// }

export default auth?.currentUser ? true : false;
