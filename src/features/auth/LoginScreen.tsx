import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useAppDispatch} from '../../state/hooks';
import {login, logout} from './authSlice';

const LoginScreen: React.FC = ({children}) => {
    const dispatch = useAppDispatch();
    return (
        <View>
            <Text>LOGIN</Text>
            <Pressable onPress={() => dispatch(login())}>
                <Text>login</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;
