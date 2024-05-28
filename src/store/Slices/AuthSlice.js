import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("authUser")) || {
            email: "",
            password: "",
            authUser: false,
        },
    },
    reducers: {
        login(state, action) {
            const user = action.payload;
            state.user = user;
            localStorage.setItem("authUser", JSON.stringify(user));
            state.user.authUser = true;
        },
        logout(state, action) {
            state.user = {
                email: "",
                password: "",
                authUser: false,
            }
            localStorage.clear()

        }
    }
});

export const { login,logout } = AuthSlice.actions;
export default AuthSlice.reducer;
