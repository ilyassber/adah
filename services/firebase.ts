import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

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