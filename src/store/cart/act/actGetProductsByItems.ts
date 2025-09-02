import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";

const actGetProductsByItems = createAsyncThunk(
    "cart/actGetProductsByItems",
    async (_,thunkAPI)=>{
        const {rejectWithValue, getState} = thunkAPI;
        const {cart} = getState() as RootState;
        console.log(cart.items);
    }
);

export default actGetProductsByItems;