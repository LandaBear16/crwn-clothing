import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoryMap } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer } from './category.styles.jsx';

type CategoryParams = {
    category: string;
};

const Category = () => {
    const { category } = useParams<keyof CategoryParams>() as CategoryParams;
    const categoriesMap = useSelector(selectCategoryMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryContainer>
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
    );
};

export default Category;
