import { createSlice } from "@reduxjs/toolkit";
import { loginToken } from "../Api/api";

/**
 * Slice for authentication-related states and actions.
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    /**
     * Logout action that sets `isAuthenticated` to false.
     * 
     * @param {Object} state - The current state.
     */
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      /**
       * Handles the pending state for login.
       * 
       * @param {Object} state - The current state.
       */
      .addCase(loginToken.pending, (state) => {
        state.loading = true;
      })
      /**
       * Handles the fulfilled state for login.
       * 
       * @param {Object} state - The current state.
       * @param {Object} action - The dispatched action.
       */
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      /**
       * Handles the rejected state for login.
       * 
       * @param {Object} state - The current state.
       * @param {Object} action - The dispatched action.
       */
      .addCase(loginToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the actions and the reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
