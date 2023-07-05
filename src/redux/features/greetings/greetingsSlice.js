import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  status: 'idle',
  error: null,
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const res = await fetch('http://localhost:3000/api/v1/greetings');
  const data = res.json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchGreetings.fulfilled, (state, { payload }) => ({
        ...state,
        greetings: payload,
        status: 'successful',
      }))
      .addCase(fetchGreetings.rejected, (state, { error }) => ({
        ...state,
        status: 'failed',
        error: error.message,
      }));
  },
});

export default greetingsSlice.reducer;
