import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../../views/Login/styles';

export const FormContainer = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>   
)