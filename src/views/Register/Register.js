import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import imageLogo from '../../assets/Logo.png';
import { styles } from './styles';
import { createUserOnFirebaseAsync } from '../../services/FirebaseApi';

export default class Registry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    _createUserAsync = async () => {
        const { email, password } = this.state
        try {
            const user = await createUserOnFirebaseAsync(email, password)

            Alert.alert(`User Created`, `User ${user.email} has succesfuly been created`, [{
                text: 'Ok', onPress: () => {
                    this.props.navigation.goBack();
                }
            }]
            );
            this.setState({ email: '', password: '' })
        } catch (error) {
            Alert.alert('Created User Failed', error.message);
        }
    }
    render = () => {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <Text style={styles.title}>Resgistering</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    onChangeText={email => {
                        this.setState({ email })
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._createUserAsync}
                >
                    <Text style={styles.textButton}>Registry</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

export const RegistryNavigationOptions = {
    title: 'Register'
}