import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryMap, CategoriesState } from './category.types';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categorySlice) => categorySlice.categories);

export const selectCategoryMap = createSelector(
    [selectCategories],
    (categories): CategoryMap =>
        categories.reduce((acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
);
