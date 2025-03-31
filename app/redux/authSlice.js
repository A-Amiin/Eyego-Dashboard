import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginWithEmail, logoutUser as firebaseLogout } from "../firebase/firebase";
import { persistor } from "./store";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const result = await loginWithEmail(email, password);
        return { uid: result.uid, email: result.email, token: result.token };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
    try {
        await firebaseLogout();
        await persistor.purge(); // This will now work since persistor is imported
        return null;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        // Add a manual reset action as a fallback
        resetAuth: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = { uid: action.payload.uid, email: action.payload.email };
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.error = null;
            });
    },
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;