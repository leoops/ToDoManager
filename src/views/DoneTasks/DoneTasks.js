import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { readTaskFromFirebase } from '../../services/FirebaseApi';
import { styles } from './styles'
import TaskListView from '../../components/TaskListView/TaskListView';
import doneList from '../../assets/done.png'

export default class DoneTasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount = () => {
        // indica qual contexto em deve ser utilizado na funcao
        //readTaskFromFirebase(this._fetchTasks.bind(this));
        readTaskFromFirebase(this._fetchTasks)
    }
    _fetchTasks = tasks => {
        const tasksDone = tasks.filter(t => t.isDone);
        this.setState({ tasks: tasksDone })
    }
    render = () => {
        return (
            <View style={styles.container}>
                <TaskListView tasks={this.state.tasks} navigation={this.props.navigation} />
            </View>
        );
    }
}

export const DoneTasksNavigationOptions = {
    tabBarLabel: 'Done',
    tabBarIcon: ({ tintColor }) => (<Image source={doneList} style={[styles.icon, { tintColor: tintColor }]} />)
}