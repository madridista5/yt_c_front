import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {UserTypeResponse} from "../types/user/userType";

export interface UserState {
    currentUser: UserTypeResponse | null,
    loading: boolean,
    error: boolean,
}

const initialState: UserState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.currentUser = action.payload;
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

export const {loginStart, loginSuccess, loginFailure, logout} = videoSlice.actions;

export default videoSlice.reducer;