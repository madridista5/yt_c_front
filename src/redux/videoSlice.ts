import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {VideoTypeResponse} from "../types/video/videoType";

export interface VideoState {
    currentVideo: VideoTypeResponse,
    loading: boolean,
    error: boolean,
}

const initialState: VideoState = {
    currentVideo: {
        _id: '',
        userId: '',
        title: '',
        desc: '',
        imgUrl: '',
        videoUrl: '',
        views: 0,
        tags: [],
        likes: [],
        dislikes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
    },
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
        like: (state, action:PayloadAction<any>) => {
            if(!state.currentVideo.likes.includes(action.payload)) {
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislikes.splice(
                    state.currentVideo.dislikes.findIndex(userId => userId === action.payload)
                );
            }
        },
        disLike: (state, action:PayloadAction<any>) => {
            if(!state.currentVideo.dislikes.includes(action.payload)) {
                state.currentVideo.dislikes.push(action.payload);
                state.currentVideo.likes.splice(
                    state.currentVideo.likes.findIndex(userId => userId === action.payload)
                );
            }
        }
    },
});

export const {fetchStart, fetchSuccess, fetchFailure, like, disLike} = videoSlice.actions;

export default videoSlice.reducer;