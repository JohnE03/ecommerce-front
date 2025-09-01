import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
    items: {[key: number ]: number};
    productInfo: TProduct[];
}

const initState: ICartState = {
    items: {},
    productInfo: []
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
        }
    }
});


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;