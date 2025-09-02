import { createSlice } from "@reduxjs/toolkit";
import actgetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import type { TProduct } from "@customTypes/product";
import type { TLoading } from "@customTypes/shared";

interface IProductsState { //defining a basic form for products such that all other follow
    records: TProduct[];
    loading: TLoading;
    error: string | null;
}

const initState: IProductsState = {
    records: [],
    loading: "idle",
    error: null
}

const  productsSlice = createSlice({
    name: "products",
    initialState: initState,
    reducers: {
        cleanUpProducts: (state) => {
            state.records = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actgetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actgetProductsByCatPrefix.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actgetProductsByCatPrefix.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string"){ state.error = action.payload as string; }
        });
    }
});

export const {cleanUpProducts} = productsSlice.actions;
export {actgetProductsByCatPrefix};
export default productsSlice.reducer;