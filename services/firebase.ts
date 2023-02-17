import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { Message } from "../types.d";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
    };

export const initFirebase = (): FirebaseApp => {

    // Initialize Firebase
    return initializeApp(firebaseConfig);
};

export const initAnalytics = (): Analytics => {

    // Initialize Analytics
    return getAnalytics(initFirebase());
};

export const sendMessage = (message: Message) => {

    const app: FirebaseApp = initFirebase();
    const db = getFirestore(app);
    const messagesCollection = collection(db, "messages");
    addDoc(messagesCollection, message)
    .then((docRef) => {
        console.log("Message sent with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error sending message: ", error);
    });
};