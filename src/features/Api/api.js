import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define headers for login requests
const headersLogin = {
  'Content-Type': 'application/json',
};

/**
 * Asynchronous action for logging in as a user.
 *
 * @async
 * @param {Object} credentials - The user's login credentials.
 * @param {Object} thunkAPI - Redux toolkit's thunk API object.
 * @returns {Promise<Object|Error>} Returns the response data on success, or an error object on failure.
 */
export const loginToken = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        credentials,
        { headers: headersLogin }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/**
 * Asynchronous action for fetching a user's profile.
 *
 * @async
 * @param {Object} credentials - Contains the authentication token.
 * @param {Object} thunkAPI - Redux toolkit's thunk API object.
 * @returns {Promise<Object|Error>} Returns the profile data on success, or an error object on failure.
 */
export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (credentials, thunkAPI) => {
    const headersUser = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${credentials.token}`
    };
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        { credentials },
        { headers: headersUser }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/**
 * Asynchronous action for updating a user's profile.
 *
 * @async
 * @param {Object} credentials - Contains the updated profile information and the authentication token.
 * @param {Object} thunkAPI - Redux toolkit's thunk API object.
 * @returns {Promise<Object|Error>} Returns the updated profile data on success, or an error object on failure.
 */
export const changeUser = createAsyncThunk(
  'user/update',
  async (credentials, thunkAPI) => {
    const headersUser = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${credentials.token}`
    };
    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName: credentials.firstName, lastName: credentials.lastName },
        { headers: headersUser }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
