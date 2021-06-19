import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {SCREENS} from '../../navigation/AppNavigation';
import {login, logout} from '../auth/authSlice';

const SplashScreen: React.FC = () => {
    return (
        <View>
            <Pressable>
                <Text>Splash</Text>
            </Pressable>
        </View>
    );
};

export default SplashScreen;
