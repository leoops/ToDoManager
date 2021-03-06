import React, { Component } from 'react';
import Firebase from "firebase";

const config = {
    apiKey: "AIzaSyCCCwzBKt0sZKIpn8ri1jGT9UJTKxBC1Jg",
    authDomain: "managertodo-ffcba.firebaseapp.com",
    databaseURL: "https://managertodo-ffcba.firebaseio.com",
    projectId: "managertodo-ffcba",
    storageBucket: "managertodo-ffcba.appspot.com",
    messagingSenderId: "117161241586"
};
export const initializeFirebaseApi = () => Firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const user = await Firebase.auth().createUserWithEmailAndPassword(email, password);
    return user.user;
}
export const signInOnFirebase = async (email, password) => {
    const user = await Firebase.auth().signInWithEmailAndPassword(email, password);
    return user.user;
}

export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = Firebase.auth()
            .onAuthStateChanged((user) => {
                resolve(user);
            }, (error) => {
                reject(error);
            }, () => {
                unsubscribe();
            });
    });
}

export const writeTaskOnFirebase = async task => {
    const user = await currentFirebaseUser();
    var tasksReference = Firebase.database().ref(user.uid);
    const key = task.key ? task.key : tasksReference.child('tasks').push().key;
    console.log("task", task)
    return await tasksReference.child(`tasks/${key}`).update(task);
}

export const readTaskFromFirebase = async listener => {
    const user = await currentFirebaseUser();
    var tasksReference = Firebase.database().ref(user.uid).child('tasks');
    tasksReference.on('value', snapshot => {
        var tasks = [];
        snapshot.forEach(element => {
            var task = element.val();
            task.key = element.key;
            tasks.push(task);
        });
        listener(tasks);
    });
}