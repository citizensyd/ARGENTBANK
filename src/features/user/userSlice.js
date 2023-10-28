import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../Api/api";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: null,
        lastName: null,
        showEdit:false
    },
    reducers: {
        changeFirstname(state, action) {
            state.firstName = action.payload;
        },
        changeLastname(state, action) {
            state.lastName = action.payload;
        },
        toggleEdit: (state, action) => {
            state.showEdit = action.payload;
          }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.firstName = action.payload.body.firstname;
                state.lastName = action.payload.body.lastname;
            });
    },
});

export const { changeFirstname, changeLastname, toggleEdit } = userSlice.actions;

export default userSlice.reducer;
