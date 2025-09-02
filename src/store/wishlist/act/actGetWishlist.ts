import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customTypes/product";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
    "wislist/actGetWishlist",
    async (_, thunkAPI)=>{
        const {rejectWithValue, fulfillWithValue } = thunkAPI;

        try {
            const userWishList = await axios.get(`/wishlist?userId=1`);
            
            if(!userWishList.data.length){
                return fulfillWithValue([]);
            }

            const concatenatedItemsId=userWishList.data.map((el)=> `id=${el.productId}`).join("&");

            const response =await axios.get<TResponse>(`/products?${concatenatedItemsId}`);
            return response.data;
        } catch (error) {
             if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            } else{
                return rejectWithValue("An unexpected error");
            }
        }
        
    }
);

export default actGetWishlist;