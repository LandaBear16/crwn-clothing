import { useSelector, useDispatch } from 'react-redux';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.slice';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectCartIsOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
