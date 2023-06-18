import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import { addItemToCart } from '../../store/cart/cart.slice';
import { ProductCardProps } from '../../store/categories/category.types';

const ProductCard = ({ product }: ProductCardProps) => {
    const { id, name, imageUrl, price } = product;
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(product));

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
