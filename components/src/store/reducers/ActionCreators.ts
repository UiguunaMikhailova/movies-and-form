import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from 'Requests';

export const fetchData = createAsyncThunk('movie/fetchAll', async (url: string, thunkAPI) => {
  try {
    const result = getData(url);
    return result;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
