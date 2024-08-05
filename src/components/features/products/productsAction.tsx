import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (limit: number, thunkAPI) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
