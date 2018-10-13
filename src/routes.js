import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import App, { AppNavigationOptions } from './views/App';
import Login, { LoginNavigationOptions } from './views/Login/Login';
import Registry, { RegistryNavigationOptions } from "./views/Register/Register";
import DoneTasks, { DoneTasksNavigationOptions } from "./views/DoneTasks/DoneTasks";
import ToDoTasks, { ToDoTasksNavigationOptions } from "./views/ToDoTasks/ToDoTasks";
import Task from "./views/Task/Task";
import { Platform } from 'react-native';

const tasksListNavigator = createBottomTabNavigator({
    ToDoTasks: {
        screen: ToDoTasks,
        title: 'To Do',
        navigationOptions: ToDoTasksNavigationOptions
    },
    DoneTasks: {
        screen: DoneTasks,
        title: 'Done',
        navigationOptions: DoneTasksNavigationOptions
    }
})
export const Routes = createStackNavigator(
    {
        App: {
            screen: App,
            navigationOptions: AppNavigationOptions
        },
        Login: {
            screen: Login,
            navigationOptions: LoginNavigationOptions,
        },
        Registry: {
            screen: Registry,
            navigationOptions: RegistryNavigationOptions
        },
        TasksList: {
            screen: tasksListNavigator,
            navigationOptions: {
                ...Platform.select({
                    ios: {
                        header: null
                    },
                    android: {
                        title: 'Task List'
                    },
                })
            },
        },
        Task: { screen: Task },
    }, {
        headerMode: 'screen'
    }
)

