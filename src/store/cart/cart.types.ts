import { CartItem as CartItemType } from './cart.types';

import { CategoryItem } from '../categories/category.types';

export type CartItem = CategoryItem & {
    quantity: number;
};

export type CartItemProps = {
    cartItem: CartItemType;
};
