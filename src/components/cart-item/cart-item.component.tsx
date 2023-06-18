import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItemProps } from '../../store/cart/cart.types';

const CartItem = ({ cartItem }: CartItemProps) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
