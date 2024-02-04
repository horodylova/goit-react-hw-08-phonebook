import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import * as api from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signupUser(data);
      return result;
    } catch ({ response }) {
      console.log(response);
      toast.error(response.data.massage);
      return thunkAPI.rejectWithValue(response.data.massage);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.userLogin(data);
    return result;
  } catch ({ response }) {
    console.log(response);
    toast.error(response.statusText);
    return thunkAPI.rejectWithValue(response.data.massage);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
