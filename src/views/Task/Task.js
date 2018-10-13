import React, { Component } from 'react';
import { View, TextInput, Switch, Text, Button, Alert, StyleSheet } from 'react-native';
import { writeTaskOnFirebase } from '../../services/FirebaseApi';

export default class Task extends Component {

    state = {
        key: '',
        title: '',
        description: '',
        priority: true,
        isDone: false
    }

    constructor(props) {
        super(props);
        try {
            const task = this.props.navigation.state.params.task;
            this.state = {
                key: task.key,
                title: task.title,
                description: task.description,
                priority: task.priority,
                isDone: task.isDone
            }


        } catch (error) { }
    }

    _saveTask = async () => {
        var task = {
            key: this.state.key,
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            isDone: this.state.isDone,
        }
        try {
            await writeTaskOnFirebase(task);
            this.props.navigation.goBack();
        } catch (error) {
            Alert.alert("Erro Saving", error.message);
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Title'
                    value={this.state.title}
                    onChangeText={(text) => { this.setState({ title: text }) }}
                />
                <TextInput
                    style={[styles.input, styles.multilineInput]}
                    placeholder='Description'
                    multiline={true}
                    numberOfLines={4}
                    value={this.state.description}
                    onChangeText={(text) => { this.setState({ description: text }) }}
                />
                <View style={styles.switchContainer}>
                    <Switch
                        value={this.state.priority}
                        onValueChange={(value) => { this.setState({ priority: value }) }}
                    />
                    <Text style={styles.switchText}>Hight priority</Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        value={this.state.isDone}
                        onValueChange={(value) => { this.setState({ isDone: value }) }}
                    />
                    <Text style={styles.switchText}>Is Done?</Text>
                </View>
                <Button
                    title='Save'
                    onPress={this._saveTask}
                />
            </View>
        );
    }
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