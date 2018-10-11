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
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user.user;
}

export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = firebase
        .auth()
        .onAuthStateChanged((user) => {
            resolve(user);
        }, (error) => {
            reject(error);
        }, () => {
            unsubscribe();
        });
    });
}

export const writeTaskOnFirebase = async (task) => {
    const user = await currentFirebaseUser();

    var taskReference = firebase
        .database()
        .ref(user.uid);
    const key = tasksReference
        .child(tasks)
        .push()
        .key;
    
    return await tasksReference
        .child(`taskc/${key}`)
        .update(task);
} 