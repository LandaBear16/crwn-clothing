import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles";
import { CartDropdownContainer, CartItems, EmptyContainer } from "./cart-dropdown.styles";

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
                ) : (
                    <EmptyContainer>Your Cart is Empty</EmptyContainer>
                )}
            </CartItems>
            <Button onClick={goToCheckout}>Go To Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropDown;
