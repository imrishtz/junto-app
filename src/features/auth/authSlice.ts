import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models/user';
import {
    signInWithPhoneNumberRepo,
    validatePhoneNumberCodeRepo,
} from './repo/authRepo';
export const signInWithPhoneNumberAsync = createAsyncThunk(
    'auth/signInWithPhoneNumber',
    async (phone: string) => {
        const response = await signInWithPhoneNumberRepo(phone);
        console.log('imri signInWithPhoneNumberAsync response', response);
        // The value we return becomes the `fulfilled` action payload
        return {response};
    },
);
export const validatePhoneNumberCodeAsync = createAsyncThunk(
    'auth/validatePhoneNumberCode',
    async (code: string) => {
        const response = await validatePhoneNumberCodeRepo(code);
        console.log('imri signInWithPhoneNumberAsync response', response);
        // The value we return becomes the `fulfilled` action payload
        return response;
    },
);

interface AuthState {
    isPhoneConfirmation: boolean;
    isAuth: boolean;
    isLoading: boolean;
    user?: User;
}
const initialState: AuthState = {
    isPhoneConfirmation: false,
    isAuth: false,
    isLoading: true,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhoneConfirmation: (state, action) => {
            state.isPhoneConfirmation = action.payload;
        },
        logout: state => {
            state.isAuth = false;
            state.isPhoneConfirmation = false;
            state.user = undefined;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(signInWithPhoneNumberAsync.fulfilled, (state, action) => {
                state.isPhoneConfirmation = !!action.payload;
            })
            .addCase(signInWithPhoneNumberAsync.rejected, state => {
                state.isPhoneConfirmation = false;
            });
        builder.addCase(
            validatePhoneNumberCodeAsync.fulfilled,
            (state, action) => {
                state.user = action.payload;
                state.isAuth = action.payload !== null;
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const {logout, setLoading} = authSlice.actions;

export default authSlice.reducer;
