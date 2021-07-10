import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const signInWithPhoneNumberApi = async (phone: string) => {
    return auth().signInWithPhoneNumber(phone);
};

export const validatePhoneNumberCodeApi = async (
    confirmation: FirebaseAuthTypes.ConfirmationResult,
    code: string,
) => {
    return confirmation.confirm(code);
};
