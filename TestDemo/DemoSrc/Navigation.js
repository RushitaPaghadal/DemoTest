import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import Logout from "./Screens/Logout";

const StackNavigation = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitleStyle: {
                color: 'black',
            },
            headerTitle: 'Sign In',
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            header: null
        }
    },
}, {
    headerLayoutPreset: 'center'
})

const Navigation = createAppContainer(StackNavigation);

export default Navigation;