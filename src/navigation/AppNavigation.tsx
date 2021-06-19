import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../features/splash/SplashScreen';
import LoginScreen from '../features/auth/LoginScreen';
import EventsMainScreen from '../features/events/EventsMainScreen';
const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="EventsMain" component={EventsMainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
