import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
    signInWithPhoneNumberAsync,
    validatePhoneNumberCodeAsync,
} from './authSlice';
import {RootState} from '../../state/store';
import {JColors} from '../../constants';

const LoginScreen: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const isPhoneConfirmation = useAppSelector(
        (state: RootState) => state.auth.isPhoneConfirmation,
    );
    const dispatch = useAppDispatch();

    async function confirmCode() {
        try {
            dispatch(validatePhoneNumberCodeAsync(code));
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome to Junto</Text>
            {isPhoneConfirmation ? (
                <>
                    <TextInput
                        style={{backgroundColor: 'blue', height: 100}}
                        value={code}
                        onChangeText={text => setCode(text)}
                    />
                    <Button title="Confirm Code" onPress={confirmCode} />
                </>
            ) : (
                <>
                    <Text>Please enter your phone number</Text>
                    <TextInput
                        style={{marginVertical: 10}}
                        placeholder="050 123456789"
                        autoFocus
                        returnKeyType="done"
                        autoCompleteType="tel"
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                        onChangeText={phoneNumber =>
                            setPhoneNumber(phoneNumber)
                        }
                    />

                    <Button
                        title="Send verification code"
                        onPress={() =>
                            dispatch(signInWithPhoneNumberAsync(phoneNumber))
                        }
                    />
                </>
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: JColors.WHITE,
    },
});
export default LoginScreen;
