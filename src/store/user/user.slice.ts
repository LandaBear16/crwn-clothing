import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.types';
import { UserData } from './user.types';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
    getCurrentUser,
} from '../../utils/firebase/firebase.utils';

const INITIAL_STATE: UserState = {
    currentUser: null,
    loading: 'idle',
    error: null,
};

export const isUserAuthenticated = createAsyncThunk('user/isUserAuthenticated', async () => {
    // if there is a user - create user doc from auth
});

export const checkUserSession = createAsyncThunk('user/checkUserSession', async () => {
    const currentUser = await getCurrentUser();
    console.log('🚀 ~ file: user.slice.ts:16 ~ checkUserSession ~ currentUser:', currentUser);
    if (!currentUser) return;

    const userSnapshot = await createUserDocFromAuth(currentUser);

    if (!userSnapshot) return;

    setCurrentUser({ ...userSnapshot.data() });
});

export const signUp = createAsyncThunk(
    'user/signUp',
    async ({ email, password }: { email: string; password: string }) => {
        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            if (!userCredential) {
                throw new Error('Failed to sign up');
            }
            // Handle the success case here
        } catch (error) {
            // Handle the error case here
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserData>) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state) => {
                state.loading = 'idle';
                state.error = null;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message as string;
            });
    },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
