import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {axiosErrorHandler} from "@utils";
import type { TProduct } from "@types";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
    "wislist/actGetWishlist",
    async (_, thunkAPI)=>{
        const {rejectWithValue, fulfillWithValue, signal } = thunkAPI;

        try {
            const userWishList = await axios.get(`/wishlist?userId=1`, {signal});
            
            if(!userWishList.data.length){
                return fulfillWithValue([]);
            }

            const concatenatedItemsId=userWishList.data.map((el)=> `id=${el.productId}`).join("&");

            const response =await axios.get<TResponse>(`/products?${concatenatedItemsId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
        
    }
);

export default actGetWishlist;