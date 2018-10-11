import React, { Component } from 'react';
import { View, TextInput, Switch, Text, Button, StyleSheet } from 'react-native';

export default class Tasks extends Component {

}
export const TasksNavigationOptions = {
    title: 'Task'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    input: {
        marginBottom: 20,
    },
    multilineInput: {
        height: 100,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    switchText: {
        marginLeft: 10,
        color: 'blue',
        fontSize: 18
    },
})