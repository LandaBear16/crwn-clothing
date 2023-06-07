import React from 'react';
import { useSelector } from 'react-redux';

import { selectCategoryMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoryMap);

    return (
        <div className='categories-preview-container'>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </div>
    );
};

export default CategoriesPreview;
