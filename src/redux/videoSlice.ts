import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {VideoTypeResponse} from "../types/video/videoType";

export interface VideoState {
    currentVideo: VideoTypeResponse | null,
    loading: boolean,
    error: boolean,
}

const initialState: VideoState = {
    currentVideo: null,
    loading: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.currentVideo = action.payload;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {fetchStart, fetchSuccess, fetchFailure} = videoSlice.actions;

export default videoSlice.reducer;