import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { currentFirebaseUser } from '../services/FirebaseApi';

export default class App extends Component {

    async componentDidMount() {
        let resetNavigation = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
        });
        try {
            const user = await currentFirebaseUser();
            if (user) {
                resetNavigation = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'TasksList' })]
                });
            }
            this.props.navigation.dispatch(resetNavigation)
        } catch (error) {
            this.props.navigation.dispatch(resetNavigation)
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.loading} />
            </View>
        );
    }
}

export const AppNavigationOptions = {
    header: null
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        width: 50,
        height: 50
    }
})