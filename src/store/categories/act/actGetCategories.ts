import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {id: number, title: string, prefix: string, img: string}; //same as interface but for just 1 item

const actGetCategories = createAsyncThunk(
    "categories/actGetCategories",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try{
            const response = await axios.get<TResponse[]>("http://localhost:5005/category");
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

export default actGetCategories;