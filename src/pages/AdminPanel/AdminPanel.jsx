import React from 'react';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import "./adminpanel.scss"
import ProductList from "./products/ProductList";

const AdminPanel = () => {
    return (
       <section>
           <Admin dataProvider={restProvider('http://localhost:3000')}>
               <Resource name="products" list={ProductList}/>
           </Admin>
       </section>
    );
};

export default AdminPanel;