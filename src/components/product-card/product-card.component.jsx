import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import { addItemToCart } from '../../store/cart/cart.slice';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
    const { id, name, imageUrl, price } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add to Cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
