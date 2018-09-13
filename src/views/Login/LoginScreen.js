import React, { Component } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, Text} from 'react-native';

import { styles } from './styles';

import imageLogo from '../../assets/Logo.png'
const INITIAL_STATE = {
    email: '',
    password: ''
}
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = INITIAL_STATE
    }
    handlerState = (name, value) => (
        this.setState({
            [name] : value,
        })
    )
    render() {
      return (
        <View style={styles.container}>
          <Image
            style={styles.image} 
            source={imageLogo}/>
          <TextInput
            value={this.state.email}
            onChangeText={ text => this.handlerState('email', text)}
            style={styles.input} 
            placeholder="Email"
          />
          <TextInput 
            style={styles.input}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button 
          style={styles.button}
            title="Login"
            onPress={ () => {} }
          />
          <TouchableOpacity 
            style={styles.transparentButton}
            onPress={ () => {} }
          > 
            <Text>Not is member? Let's</Text>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      );
    }
}