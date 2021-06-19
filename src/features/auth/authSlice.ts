import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginApi} from '../../api/authApi';
export const loginAsync = createAsyncThunk('auth/login', async () => {
    const response = await loginApi();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        isLoading: true,
    },
    reducers: {
        login: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isAuth = true;
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
            .addCase(loginAsync.pending, state => {
                state.isLoading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
            });
    },
});

// Action creators are generated for each case reducer function
export const {login, logout, setLoading} = authSlice.actions;

export default authSlice.reducer;
