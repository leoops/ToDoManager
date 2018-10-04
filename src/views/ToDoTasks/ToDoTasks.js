import React, { Component } from 'react';
import { Image, View } from 'react-native';
import tasksList from '../../assets/tasksList.png'
import styles from './styles';

export default class ToDoTasks extends Component {
    render = () => {
        <View style={styles.container} />
    }
}

export const ToDoTasksNavigationOptions = {
    tabBarLabel: 'Tasks',
    tabBarIcon: ({ tintColor }) => (
        <Image source={tasksList} style={[styles.icon, { tintColor: tintColor }]} />
    )
}