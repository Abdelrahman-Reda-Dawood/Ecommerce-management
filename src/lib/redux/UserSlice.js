import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await axios.post(
      'https://shopping-api-7cy0.onrender.com/api/auth/login',
      userCredentials
    );
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
);

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (userCredentials) => {
    const request = await axios.post(
      'https://shopping-api-7cy0.onrender.com/api/auth/signup',
      userCredentials
    );
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        console.log(action.error.message);
        if (
          action.error.message === 'Request failed with status code 400'
        ) {
          state.error = 'Access Denied! Invalid Credentials';
        } else if (
          action.error.message === 'Request failed with status code 401'
        ) {
          state.error = 'Invalid Email or Password';
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
