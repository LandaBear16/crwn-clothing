import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categorySlice) => categorySlice.categories);

export const selectCategoryMap = createSelector([selectCategories], (categories) =>
    categories.reduce((acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);
