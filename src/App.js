import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import { checkUserSession } from './store/user/user.slice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
        // const unsubscribe = onAuthStateChangedListener((user) => {
        //     if (user) {
        //         createUserDocFromAuth(user);
        //     }
        //     const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);
        //     dispatch(setCurrentUser(pickedUser));
        // });
        // return unsubscribe;
    }, [dispatch]);

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='login' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
