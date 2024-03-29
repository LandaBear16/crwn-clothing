import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, HeaderContainer, HeaderBlock, Total } from './checkout.styles';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <HeaderContainer>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </HeaderContainer>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>TOTAL: {cartTotal}</Total>
            <PaymentForm />
        </CheckoutContainer>
    );
};

export default Checkout;
