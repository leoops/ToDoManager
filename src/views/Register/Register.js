import React, { Component} from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, Button, Alert } from 'react-native';

import imageLogo from '../../assets/Logo.png';
import { styles } from './styles';
import { createUserOnFirebaseAsync } from '../../services/FirebaseApi';

export default class Registry extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    _createUserAsync = async () => {
        const { user, password } = this.state
        try {
            const user = await createUserOnFirebaseAsync(email, password)
            
            Alert.alert(`User Created`, `User ${user.email} has succesfuly been created`, [{
                text: 'Ok', onPress: () => {
                this.props.navigation.goBack();
                }
                }]);
            this.state.setState({email: '', password: '' })
        } catch(error) {
            Alert.alert('Created User Failed', error.message);
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
                            this._createUserAsync()
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