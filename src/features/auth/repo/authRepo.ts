import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {User} from '../../../models/user';
import {
    signInWithPhoneNumberApi,
    validatePhoneNumberCodeApi,
} from '../api/authApi';

const cleanConfirmation = () => (confirmation = undefined);

export let confirmation: FirebaseAuthTypes.ConfirmationResult | undefined =
    undefined;

export const signInWithPhoneNumberRepo = async (phone: string) => {
    let isConfirmed = undefined;
    try {
        confirmation = await signInWithPhoneNumberApi(phone);
        isConfirmed = confirmation !== null;
    } catch (err) {
        console.log('signInWithPhoneNumberRepo Error:', err);
    } finally {
        return isConfirmed;
    }
};
export const validatePhoneNumberCodeRepo = async (
    code: string,
): Promise<User | undefined> => {
    let user: User | undefined = undefined;
    try {
        if (!confirmation) {
            throw new Error("Phone isn't confirmed");
        }
        const userCred: FirebaseAuthTypes.UserCredential | null =
            await validatePhoneNumberCodeApi(confirmation, code);
        console.log('imri userCred', userCred);
        // todo remove any
        user = {
            uid: userCred?.user.uid,
        };
        cleanConfirmation();
    } catch (err) {
        console.log('validatePhoneNumberCodeRepo Error:', err);
    } finally {
        return user;
    }
};
