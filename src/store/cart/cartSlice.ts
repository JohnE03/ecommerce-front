import type { TProduct } from "@customTypes/product";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "@customTypes/shared";
import {getCartTotalQuantitySelector} from "./selectors/index";

interface ICartState {
    items: {[key: string]: number};
    productsInfo: TProduct[];
    loading: TLoading;
    error: null | string;
}

const initState: ICartState = {
    items: {},
    productsInfo: [],
    loading: "idle",
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if(state.items[id]){
                state.items[id]++;
            }
            else{
                state.items[id] = 1;
            }
        },
        cartItemChangeQuantity: (state, action)=>{
            state.items[action.payload.id]=action.payload.quantity;
        },
        cartItemRemove: (state, action)=>{
            delete state.items[action.payload];
            state.productsInfo=state.productsInfo.filter((el)=>el.id!==action.payload);
        },
        cleanCartProductsFullInfo: (state)=>{
            state.productsInfo = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending,(state)=>{
            state.loading="pending";
            state.error=null
        })
        builder.addCase(actGetProductsByItems.fulfilled,(state, action)=>{
            state.loading = "succeeded";
            state.productsInfo = action.payload;
        })
        builder.addCase(actGetProductsByItems.rejected,(state, action)=>{
            state.loading="failed";
            if(action.payload && typeof action.payload === "string"){ state.error = action.payload as string; }
        })
    }
});

export{
    actGetProductsByItems,
    getCartTotalQuantitySelector
}
export const {addToCart, cartItemChangeQuantity, cartItemRemove, cleanCartProductsFullInfo} = cartSlice.actions;
export default cartSlice.reducer;