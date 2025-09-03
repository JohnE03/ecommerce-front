import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { isString, type TCategory, type TLoading } from "@types";

interface ICategoriesState { //defining a basic form for categories such that all other follow
    records: TCategory[];
    loading: TLoading; //hard coded states
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
    reducers: {
        categoriesRecordsCleanUp: (state)=>{
            state.records = [];
        }
    },
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
            if(isString(action.payload)){ state.error = action.payload as string; }
        });
    }
});

export {actGetCategories};
export const {categoriesRecordsCleanUp} = categoriesSlice.actions;
export default categoriesSlice.reducer;