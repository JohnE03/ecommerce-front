import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@types";
import {axiosErrorHandler} from "@utils";

const actgetProductsByCatPrefix = createAsyncThunk(
    "products/actgetProductsByCatPrefix",
    async (prefix: string, thunkAPI) => {
        const {rejectWithValue, signal} = thunkAPI;
        try{
            const response = await axios.get<TProduct[]>(`/products?cat_prefix=${prefix}`, {signal});
            //const data = response.data;
            return response.data;
        }
        catch(error){
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actgetProductsByCatPrefix;