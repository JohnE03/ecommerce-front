import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { type TProduct, type TLoading, isString } from "@types";

interface IWishlist {
    itemsId: number[];
    productsInfo: TProduct[];
    error: null|string;
    loading: TLoading;
}

const initialState: IWishlist = {
    itemsId: [],
    productsInfo: [],
    error: null,
    loading: "idle"
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        wishlistCleanUp: (state)=>{
            state.productsInfo=[];
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(actLikeToggle.pending, (state)=>{
            state.error=null;
        })
        builder.addCase(actLikeToggle.fulfilled, (state, action)=>{
            if(action.payload.type==="add"){
                state.itemsId.push(action.payload.id);
            }else{
                state.itemsId = state.itemsId.filter((el)=> el!==action.payload.id);
                state.productsInfo=state.productsInfo.filter((el) => el.id !== action.payload.id);
            }
        })
        builder.addCase(actLikeToggle.rejected, (state, action)=>{
            if (action.payload && typeof action.payload === 'string'){
                state.error=action.payload;
            }
        })
        builder.addCase(actGetWishlist.pending, (state)=>{
            state.loading='pending';
            state.error=null;
        })
        builder.addCase(actGetWishlist.fulfilled, (state, action)=>{
            state.loading='succeeded'
            state.productsInfo=action.payload;
        })
        builder.addCase(actGetWishlist.rejected, (state, action)=>{
            state.loading='failed'
            if (isString(action.payload)){
                state.error=action.payload;
            }
        })
    }
});

export {actLikeToggle, actGetWishlist};
export const {wishlistCleanUp} = wishlistSlice.actions;
export default wishlistSlice.reducer;