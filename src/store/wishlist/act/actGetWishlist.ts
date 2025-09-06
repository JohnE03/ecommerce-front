import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {axiosErrorHandler} from "@utils";
import type { TProduct } from "@types";
import type { RootState } from "@store/index";

type TDataType = "productsFullInfo" | "productIds";
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
    "wishlist/actGetWishlist",
    async (dataType: TDataType, thunkAPI)=>{
        const {rejectWithValue, signal, getState } = thunkAPI;
        const {auth} = getState() as RootState;

        try {
            const userWishList = await axios.get(`/wishlist?userId=${auth.user?.id}`, {signal});
            console.log("User ID:", auth.user?.id);
            console.log("Wishlist Response:", userWishList.data);
            
            if(!userWishList.data.length){
                return {data: [], dataType: "empty"};
            }

            if(dataType=="productIds"){
                const concatenatedItemsId = userWishList.data.map((el)=> el.productId);
                return {data: concatenatedItemsId, dataType: "productIds"};                
            }
            else{

            const concatenatedItemsId=userWishList.data.map((el)=> `id=${el.productId}`).join("&");

            const response =await axios.get<TResponse>(`/products?${concatenatedItemsId}`);
            return {data: response.data, dataType: "productsFullInfo"};
            }
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
        
    }
);

export default actGetWishlist;