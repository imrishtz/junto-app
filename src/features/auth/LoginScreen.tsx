import React, {useRef, useState} from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet,
    LayoutAnimation,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
    signInWithPhoneNumberAsync,
    validatePhoneNumberCodeAsync,
} from './authSlice';
import {RootState} from '../../state/store';
import {JColors, JLayout} from '../../constants';
import {wp} from '../../utils/responsiveUtil';

const LoginScreen: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [value, setValue] = useState('');
    const [code, setCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [showMessage, setShowMessage] = useState(false);
    const isPhoneConfirmation = useAppSelector(
        (state: RootState) => state.auth.isPhoneConfirmation,
    );
    const dispatch = useAppDispatch();

    async function confirmCode() {
        try {
            // dispatch(validatePhoneNumberCodeAsync(code));
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={JLayout.H1}>Sign In</Text>
            {showMessage && (
                <View style={styles.message}>
                    <Text>Value : {value}</Text>
                    <Text>Formatted Value : {formattedValue}</Text>
                    <Text>Valid : {valid ? 'true' : 'false'}</Text>
                </View>
            )}
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
                    <Text style={JLayout.H3}>
                        Please enter your phone number:
                    </Text>
                    {/* <TextInput
                        style={{
                            marginVertical: 10,
                            fontSize: 18,
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: wp('7%'),
                            maxWidth: wp('60%'),
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                        placeholder="050 123456789"
                        autoFocus
                        returnKeyType="done"
                        autoCompleteType="tel"
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                        onChangeText={phoneNumber =>
                            setPhoneNumber(phoneNumber)
                        }
                    /> */}

                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="IL"
                        layout="first"
                        onChangeText={text => {
                            setValue(text);
                        }}
                        onChangeFormattedText={text => {
                            setFormattedValue(text);
                        }}
                        withShadow
                        autoFocus
                    />
                    <Button
                        title="Send verification code"
                        onPress={() => {
                            const checkValid =
                                phoneInput.current?.isValidNumber(value);
                            setShowMessage(true);
                            setValid(checkValid ? checkValid : false);
                            console.log('phoneInput.current');
                            // TODO IMRI pass phone number with prefix
                            // dispatch(signInWithPhoneNumberAsync(phoneNumber));
                        }}
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
        paddingHorizontal: wp('4%'),
    },
});
export default LoginScreen;
