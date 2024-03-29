import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { LogoContainer, NavLinks, NavigationContainer, NavLink } from './navigation.styles.jsx';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';

import CartDropDown from '../../components/cart-drop-down/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import './navigation.styles.jsx';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartItemCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectCartIsOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to='/login'>Sign In</NavLink>
                    )}
                    <CartIcon quantity={cartItemCount} />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
