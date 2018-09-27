import { createStackNavigator } from "react-navigation";
import Login, { LoginNavigationOptions } from './views/Login/Login';
import Registry, { RegistryNavigationOptions } from "./views/Register/Register";
 
export const Routes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: LoginNavigationOptions,
    },
    Registry: {
        screen: Registry,
        navigationOptions: RegistryNavigationOptions
    }
})