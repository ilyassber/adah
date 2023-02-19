import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { Firestore, CollectionReference, getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { Message } from "../types.d";

export const initFirebase = (): FirebaseApp => {

    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
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