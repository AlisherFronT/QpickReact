import React from 'react';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import "./adminpanel.scss"
import ProductList from "./products/ProductList";
import CreateProduct from "./createproduct/CreateProduct"
import EditProduct from "./editproduct/EditProduct"
import UserList from "./users/UserList"
import CreateUser from "./createuser/CreateUser"
import EditUser from "./edituser/EditUser"

const AdminPanel = () => {
    return (
       <section>
           <Admin dataProvider={restProvider('http://localhost:3000')}>
               <Resource name="products" list={ProductList} create={CreateProduct} edit={EditProduct}/>
               <Resource name="users" list={UserList} create={CreateUser} edit={EditUser}/>
           </Admin>
       </section>
    );
};

export default AdminPanel;