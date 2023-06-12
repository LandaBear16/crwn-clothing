import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cart.types';
import { CategoryItem } from '../categories/category.types';

export type CartState = {
    cartItems: CartItem[];
    cartItemCount: number;
    cartTotal: number;
    isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
    cartItems: [],
    cartItemCount: 0,
    cartTotal: 0,
    isCartOpen: false,
};

const addToCart = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    const cartItemFound = cartItems.find((item) => item.id === productToAdd.id);

    if (cartItemFound) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const cartItemFound = cartItems.find((item) => item.id === cartItemToRemove.id);

    if (cartItemFound && cartItemToRemove.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state, action: PayloadAction<CategoryItem>) {
            state.cartItems = addToCart(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action: PayloadAction<CartItem>) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action: PayloadAction<CartItem>) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
        setIsCartOpen(state, action: PayloadAction<boolean>) {
            state.isCartOpen = action.payload;
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
