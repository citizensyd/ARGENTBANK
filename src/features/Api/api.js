import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headersLogin = {
  'Content-Type': 'application/json',
};

export const loginToken = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        credentials,
        { headersLogin }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


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
