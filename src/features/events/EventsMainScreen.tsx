import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useAppDispatch} from '../../state/hooks';
import {logout} from '../auth/authSlice';

const EventsMainScreen: React.FC = ({children}) => {
    const dispatch = useAppDispatch();
    return (
        <View>
            <Text>EventsMain</Text>
            <Pressable onPress={() => dispatch(logout())}>
                <Text>logout</Text>
            </Pressable>
        </View>
    );
};

export default EventsMainScreen;
