import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PURGE } from "redux-persist";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  picture: string;
  role: string;
  number: string;
  address: string;
};

export interface AuthState {
  token: null | string;
  user: null | TUser;
}

const initialState: AuthState = {
  token: null ,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload?.token;
      state.user = action.payload?.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.user = null;
      state.token = null;
    });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

// Selector with PersistPartial
export const selectUser = (state: RootState & { auth: AuthState  }) =>
  state.auth.user;
