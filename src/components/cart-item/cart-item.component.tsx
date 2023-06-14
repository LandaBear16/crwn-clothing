import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItem as CartItemType } from '../../store/cart/cart.types';

export type CartItemProps = {
    cartItem: CartItemType;
};

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
