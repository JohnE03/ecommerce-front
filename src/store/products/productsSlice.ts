import { createSlice } from "@reduxjs/toolkit";

interface IProductsState { //defining a basic form for products such that all other follow
    id: number;
    title: string;
    price: number;
    cat_prefix: string;
    img: string | null;
}

const initState: IProductsState = {
    id: 0,
    title: "",
    price: 29.99,
    cat_prefix: "",
    img: ""
}

const  productsSlice = createSlice({
    name: "products",
    initialState: initState,
    reducers: {}
})

export default productsSlice.reducer;