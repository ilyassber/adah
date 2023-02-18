import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { Firestore, CollectionReference, getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { Message } from "../types.d";

export const initFirebase = (): FirebaseApp => {

    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    };

    console.log(firebaseConfig);

    return initializeApp(firebaseConfig);
};

export const initAnalytics = (): Analytics => {

    return getAnalytics(initFirebase());
};

export const sendMessage = (message: Message) => {

    const app: FirebaseApp = initFirebase();
    const db: Firestore = getFirestore(app);
    const messagesCollection: CollectionReference = collection(db, "messages");
    addDoc(messagesCollection, message)
    .then((docRef) => {
        console.log("Message sent with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error sending message: ", error);
    });
};