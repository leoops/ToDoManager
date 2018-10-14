import React, { Component } from 'react';
import tasksList from '../../assets/tasksList.png'
import { Image, View, TouchableOpacity } from 'react-native';
import { readTaskFromFirebase } from '../../services/FirebaseApi';
import { styles } from './styles';
import imgPlus from '../../assets/addButton.png'
import TaskListView from '../../components/TaskListView/TaskListView';

export default class ToDoTasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount = () => {
        // indica qual contexto em deve ser utilizado na funcao
        //readTaskFromFirebase(this._fetchTasks.bind(this));
        readTaskFromFirebase(this._fetchTasks)
    }
    _fetchTasks = tasks => {
        const tasksDone = tasks.filter(t => !t.isDone);
        this.setState({ tasks: tasksDone })
    }
    goToTask = () => {
        this.props.navigation.navigate('Task');
    }
    render = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.floatButton}
                    onPress={this.goToTask} >
                    <Image style={styles.icon} source={imgPlus} />
                </TouchableOpacity>
                <TaskListView tasks={this.state.tasks} navigation={this.props.navigation} />
            </View>
        )
    }
}

export const ToDoTasksNavigationOptions = {
    tabBarLabel: 'Tasks',
    tabBarIcon: ({ tintColor }) => (<Image source={tasksList} style={[styles.icon, { tintColor: tintColor }]} />)
}



