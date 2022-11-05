import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Data } from '../../types';

export const fetchData = createAsyncThunk('movie/fetchAll', async (url: string, thunkAPI) => {
  try {
    const response = await axios.get<Data>(url);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
