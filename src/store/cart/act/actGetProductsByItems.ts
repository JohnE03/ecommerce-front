import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
    "cart/actGetProductsByItems",
    async (_,thunkAPI)=>{
        const {rejectWithValue, fulfillWithValue,getState} = thunkAPI;
        const {cart} = getState() as RootState;
        console.log(cart.items);
        const itemsId=Object.keys(cart.items);
        const concatenatedItemIds = itemsId.map(el=>`id=${el}`).join("&");

        if(!itemsId.length) return fulfillWithValue([]);

        try {
            const response = await axios.get<TResponse>(`/products?${concatenatedItemIds}`);
            return response.data;
        } catch (error) {
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            }
            else{
                return rejectWithValue("An unexpected error occured")
            }
        }
    }
);

export default actGetProductsByItems;