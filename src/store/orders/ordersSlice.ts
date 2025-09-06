import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import { isString, type TLoading, type TOrderItem } from "@types";

interface IOrderSlice{
    orderList: TOrderItem[];
    loading: TLoading;
    error: string | null;
}

const initialState: IOrderSlice = {
    orderList: [],
    loading: "idle",
    error: null
}

const ordersSlice=createSlice({
    name: "orders",
    initialState,
    reducers: {
        resetOrderStatus: (state)=>{
            state.loading="idle";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(actPlaceOrder.pending, (state)=>{
            state.loading="pending";
            state.error=null;
        });
        builder.addCase(actPlaceOrder.fulfilled, (state)=>{
            state.loading="succeeded"
        });
        builder.addCase(actPlaceOrder.rejected, (state, action)=>{
            state.loading="failed";
            if (isString(action.payload)){
                state.error=action.payload;
            }
        });
    }
});
export {actPlaceOrder};
export const {resetOrderStatus} = ordersSlice.actions;
export default ordersSlice.reducer;