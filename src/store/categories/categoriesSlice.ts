import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

interface ICategoriesState { //defining a basic form for categories such that all other follow
    records: {id: number, title: string, prefix: string, img: string}[];
    loading: "idle" | "pending" | "succeeded" | "failed"; //hard coded states
    error: string | null;
}

const initState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null
}

const  categoriesSlice = createSlice({
    name: "categories",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string"){ state.error = action.payload as string; }
        });
    }
});

export {actGetCategories};
export default categoriesSlice.reducer;