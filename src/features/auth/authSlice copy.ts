import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {acc} from 'react-native-reanimated';
import {signInWithPhoneNumberRepo} from './repo/authRepo';
export const signInWithPhoneNumberAsync = createAsyncThunk(
    'auth/login',
    async (phone: string) => {
        const response = await signInWithPhoneNumberRepo(phone);
        console.log('imri signInWithPhoneNumberAsync response', response);
        // The value we return becomes the `fulfilled` action payload
        return response;
    },
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        isLoading: true,
        user: {},
    },
    reducers: {
        login: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isAuth = true;
            state.user = action.payload;
        },
        logout: state => {
            state.isAuth = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(signInWithPhoneNumberAsync.pending, state => {
                state.isLoading = true;
            })
            .addCase(signInWithPhoneNumberAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
            })
            .addCase(signInWithPhoneNumberAsync.rejected, (state, action) => {
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const {login, logout, setLoading} = authSlice.actions;

export default authSlice.reducer;
