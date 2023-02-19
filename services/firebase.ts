import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { Firestore, CollectionReference, getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { Message } from "../types.d";

export const initFirebase = (firebaseConfig: any): FirebaseApp => {

    console.log(firebaseConfig);

    return initializeApp(firebaseConfig);
};

export const initAnalytics = (app: FirebaseApp): Analytics => {

    return getAnalytics(app);
};

export const sendMessage = (firebaseConfig: any, message: Message) => {

    const app: FirebaseApp = initFirebase(firebaseConfig);
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