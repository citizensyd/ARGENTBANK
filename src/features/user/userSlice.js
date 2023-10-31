import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../Api/api";

/**
 * Redux slice to manage user state.
 */
const userSlice = createSlice({
    name: 'user',
    /**
     * Initialize the state with default values.
     */
    initialState: {
        firstName: null,
        lastName: null,
        showEdit: false
    },
    reducers: {
        /**
         * Change the first name of the user.
         * 
         * @param {Object} state - The current state.
         * @param {Object} action - The dispatched action.
         */
        changeFirstname(state, action) {
            state.firstName = action.payload;
        },
        /**
         * Change the last name of the user.
         * 
         * @param {Object} state - The current state.
         * @param {Object} action - The dispatched action.
         */
        changeLastname(state, action) {
            state.lastName = action.payload;
        },
        /**
         * Toggle the edit mode for user information.
         * 
         * @param {Object} state - The current state.
         * @param {Object} action - The dispatched action.
         */
        toggleEdit: (state, action) => {
            state.showEdit = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            /**
             * Handles the fulfilled state for fetchUser.
             * 
             * @param {Object} state - The current state.
             * @param {Object} action - The dispatched action.
             */
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.firstName = action.payload.body.firstname;
                state.lastName = action.payload.body.lastname;
            });
    },
});

/** Export actions */
export const { changeFirstname, changeLastname, toggleEdit } = userSlice.actions;

/** Export reducer */
export default userSlice.reducer;
