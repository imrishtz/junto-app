import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../features/splash/SplashScreen';
import SplashScreenLib from 'react-native-splash-screen';
import LoginScreen from '../features/auth/LoginScreen';
import EventsMainScreen from '../features/events/EventsMainScreen';
import {useAppSelector} from '../state/hooks';
import {useDispatch} from 'react-redux';
import {setLoading} from '../features/auth/authSlice';
import {JColors} from '../constants';
import {View} from 'react-native';

export const SCREENS = {
    SPLASH: 'SPLASH',
    LOGIN: 'LOGIN',
    EVENTS_MAIN: 'EVENTS_MAIN',
};

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const isLoading = useAppSelector(state => state.auth.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        SplashScreenLib.hide();
        dispatch(setLoading(false));
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={SCREENS.SPLASH}>
                {isLoading ? (
                    <Stack.Screen
                        name={SCREENS.SPLASH}
                        component={SplashScreen}
                    />
                ) : isAuth ? (
                    <Stack.Screen
                        name={SCREENS.EVENTS_MAIN}
                        component={EventsMainScreen}
                    />
                ) : (
                    <Stack.Screen
                        options={{
                            title: 'Sign In',
                        }}
                        name={SCREENS.LOGIN}
                        component={LoginScreen}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
