import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCategory } from "@types";
import {axiosErrorHandler} from "@utils";

type TResponse = TCategory; //same as interface but for just 1 item

const actGetCategories = createAsyncThunk(
    "categories/actGetCategories",
    async (_, thunkAPI) => {
        const {rejectWithValue, signal} = thunkAPI;
        try{
            const response = await axios.get<TResponse[]>("/category", {signal});
            //const data = response.data;
            return response.data;
        }
        catch(error){
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetCategories;