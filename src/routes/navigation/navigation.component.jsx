import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropDown from "../../components/cart-drop-down/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.jsx";
import { LogoContainer, NavLinks, NavigationContainer, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, cartItemCount } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to="/login">Sign In</NavLink>
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
