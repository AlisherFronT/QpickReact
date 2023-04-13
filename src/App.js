import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.scss';

import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Catalog from './pages/Catalog/Catalog';
import Delivery from './pages/Delivery/Delivery';
import Basket from './pages/Basket/Basket';
import Favorites from './pages/Favorites/Favorites';
import Contacts from './pages/Contacts/Contacts';
import Product from './pages/Product/Product';
import { useDispatch } from 'react-redux';
import { signInAccount } from './redux/reducers/user';
import CheckOut from './pages/CheckOut/CheckOut';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            dispatch(signInAccount(JSON.parse(localStorage.getItem('user'))));
        }
    }, []);

    return (
        <div className='App'>
                <Routes>
                    <Route path={''} element={<Layout />}>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/catalog'} element={<Catalog />} />
                        <Route path={'/delivery'} element={<Delivery />} />
                        <Route path={'/basket'} element={<Basket />} />
                        <Route path={'/favorites'} element={<Favorites />} />
                        <Route path={'/contacts'} element={<Contacts />} />
                        <Route path={'/product/:id'} element={<Product />} />
                        <Route path={'/checkout'} element={<CheckOut />} />
                    </Route>
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/*'} element={<AdminPanel />} />
                </Routes>
        </div>
    );
}

export default App;
