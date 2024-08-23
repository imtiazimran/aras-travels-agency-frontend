// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
    _id: string;
    name: string;
    email: string;
    photo: string;
}

export interface AuthState {
    token: null | string;
    user: null | TUser;
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
