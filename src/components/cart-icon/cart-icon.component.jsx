import { useSelector, useDispatch } from 'react-redux';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { selectCartIsOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = ({ quantity }) => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartIsOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
