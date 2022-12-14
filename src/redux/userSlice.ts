import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    user: null,
    loading: boolean,
    error: boolean,
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            return initialState;
        }
    },
});

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions;

export default userSlice.reducer;