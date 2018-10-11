import React, { Component } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import doneList from '../../assets/done.png'
import { styles } from './styles'

export default class DoneTasks extends Component {
    render = () => {
        return(
            <View style={styles.container}>
                <ActivityIndicator style={styles.loading} />
            </View>
        );
    }
} 

export const DoneTasksNavigationOptions = {
    tabBarLabel: 'Done',
    tabBarIcon: ({ tintColor }) => (<Image source={doneList} style={[styles.icon, {tintColor: tintColor}]} />)
}