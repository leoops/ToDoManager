import React, { Component } from 'react';
import firebase from "firebase";

const config  = {
    apiKey: "AIzaSyCCCwzBKt0sZKIpn8ri1jGT9UJTKxBC1Jg",
    authDomain: "managertodo-ffcba.firebaseapp.com",
    databaseURL: "https://managertodo-ffcba.firebaseio.com",
    projectId: "managertodo-ffcba",
    storageBucket: "managertodo-ffcba.appspot.com",
    messagingSenderId: "117161241586"
};
export const initializeFirebaseApi = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

    return user.user;
}
export const signInOnFirebase = async (email, password) => {
    alert('oi', email, password);
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user.user;
}