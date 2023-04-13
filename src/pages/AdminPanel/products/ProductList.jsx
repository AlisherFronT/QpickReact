import React from 'react';
import { List, Datagrid,  TextField, EditButton, DeleteButton,  FunctionField } from 'react-admin';

const ProductList = (props) => {
    const getInfoFields = (record) => {
        const { type, info } = record;
        switch (type) {
            case 'headphones':
                return (
                    <>
                        <TextField source="sound" record={info} />
                        <TextField source="waterproof" record={info} />
                        <TextField source="battery" record={info} />
                        <TextField source="case" record={info} />
                    </>
                );
            case 'macbook':
                return (
                    <>
                        <TextField source="chip" record={info} />
                        <TextField source="memory" record={info} />
                        <TextField source="ssd" record={info} />
                        <TextField source="display" record={info} />
                        <TextField source="camera" record={info} />
                        <TextField source="port" record={info} />
                        <TextField source="usb" record={info} />
                        <TextField source="adapter" record={info} />
                        <TextField source="keyboard" record={info} />
                    </>
                );
            case 'phone':
                return (
                    <>
                        <TextField source="chip" record={info} />
                        <TextField source="connect" record={info} />
                        <TextField source="face" record={info} />
                        <TextField source="display" record={info} />
                        <TextField source="battery" record={info} />
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="type" />
                <EditButton basePath='/products' />
                <DeleteButton basePath='/products' />
            </Datagrid>
        </List>
    );
};

export default ProductList;
