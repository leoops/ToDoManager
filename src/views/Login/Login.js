import React, { Component } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, Text, Alert } from 'react-native';
import { signInOnFirebase } from "../../services/FirebaseApi";
import { styles } from './styles';

import imageLogo from '../../assets/organize.png'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handlerState = (name, value) => (
    this.setState({
      [name]: value,
    })
  )
  signInOnFirebase = async () => {
    const { email, password } = this.state
    try {
      await signInOnFirebase(email, password)
      this.props.navigation.replace('TasksList')
    } catch (error) {
      Alert.alert(`Login failed`, error.message)
    }
  }
  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={imageLogo} />
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            value={this.state.email}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.signInOnFirebase}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButton}
          onPress={() => this.props.navigation.navigate('Registry')}
        >
          <Text style={styles.transparentButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const LoginNavigationOptions = {
  header: null,
}