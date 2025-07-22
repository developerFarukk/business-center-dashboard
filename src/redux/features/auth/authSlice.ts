

import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// export type TUser = {
//     username: string;
//     userEmail: string;
//     role: string;
// };

type TAuthState = {
    // user: null | TUser;
    token: null | string;
};

const initialState: TAuthState = {
    // user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setUser: (state, action: PayloadAction<{ 
   
            token: string }>) => {

            state.token = action.payload.token;
        },

        logout: (state) => {
            // state.user = null;
            state.token = null;
            localStorage.removeItem('token')
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
// export const selectCurrentUser = (state: RootState) => state.auth.user;
