import { configureStore } from '@reduxjs/toolkit'
import categoriesSliceReducer from './categories/categoriesSlice';
import productsSliceReducer from "./products/productsSlice";

export const store = configureStore({
  reducer: {categories: categoriesSliceReducer, products: productsSliceReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;