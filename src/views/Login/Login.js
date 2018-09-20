import React, { Component } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, Text} from 'react-native';

import { styles } from './styles';

import imageLogo from '../../assets/Logo.png' 

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: ''
      }
    }
    handlerState = (name, value) => (
        this.setState({
            [name] : value,
        })
    )
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
                style={styles.image} 
                source={imageLogo}/>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.input} 
              value={this.state.email}
              placeholder="Email"
              onChangeText={ text => this.handlerState('email', text)}
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
          </View>
          <TouchableOpacity 
            style={styles.transparentButton}
            onPress={ () => this.props.navigation.navigate('Registry') }
          > 
            <Text>Not is member? Let's</Text>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

export const LoginNavigationOptions = {
  header: null,
}