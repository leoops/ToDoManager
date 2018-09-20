import React, { Component} from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, Image, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import imageLogo from '../../assets/Logo.png';
import { styles } from './styles';

export default class Registry extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render = () => {
        return(
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <View
                    style={styles.topView}
                >
                    <Image 
                        style={styles.img}
                        source={imageLogo}
                        resizeMode='contain'
                    />
                    <Text style={styles.title}>Resgistering new user</Text>
                </View>
                <View styles={styles.bottonView}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        onChangeText={ email => {
                            this.setState({ email })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={ password => this.setState({ password })}
                    />
                    <Button 
                        title='Registry User'
                        onPress={() => {
                            Alert.alert(`Email ${this.state.email}\n Password: ${this.state.password}`)
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export const RegistryNavigationOptions = {
    title: 'Register'
}