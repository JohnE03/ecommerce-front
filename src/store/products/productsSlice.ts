import { createSlice } from "@reduxjs/toolkit";
import actgetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { type TProduct, type TLoading, isString } from "@types";

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
            if(isString(action.payload)){ state.error = action.payload as string; }
        });
    }
});

export const {cleanUpProducts} = productsSlice.actions;
export {actgetProductsByCatPrefix};
export default productsSlice.reducer;