import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

AppRegistry.registerComponent(appName, () => {
    initializeFirebaseApi()
    return App
});
