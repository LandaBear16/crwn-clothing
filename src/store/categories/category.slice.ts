import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from './category.types';

export type CategoriesState = {
    categories: Category[];
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = categorySlice.actions;
export const categoriesReducer = categorySlice.reducer;
