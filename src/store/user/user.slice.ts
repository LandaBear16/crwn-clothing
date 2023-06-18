import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.types';
import { UserData } from './user.types';

const INITIAL_STATE: UserState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserData>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
