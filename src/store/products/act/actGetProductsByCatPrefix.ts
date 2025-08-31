import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customTypes/product";

const actgetProductsByCatPrefix = createAsyncThunk(
    "products/actgetProductsByCatPrefix",
    async (prefix: string, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try{
            const response = await axios.get<TProduct[]>(`http://localhost:5005/products?cat_prefix=${prefix}`);
            //const data = response.data;
            return response.data;
        }
        catch(err){
            if(axios.isAxiosError(err)){
                return rejectWithValue(err.response?.data.message || err.message);
            }
            else return rejectWithValue("An unexpected error occurred");
        }
    }
);

export default actgetProductsByCatPrefix;