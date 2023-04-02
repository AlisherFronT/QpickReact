import React from 'react';
import { Edit, NumberInput, SimpleForm, TextInput, SelectInput, SimpleFormIterator, ArrayInput, } from 'react-admin';


const EditProduct = (props) => {
    return (
        <Edit title='Edit Page' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="image" />
                <TextInput source="title" />
                <NumberInput source="price"/>
                <SelectInput source="type" choices={[
                    { id: 'macbook', name: 'Macbook' },
                    { id: 'headphones', name: 'Headphones' },
                    { id: 'phone', name: 'Phone' },
                ]} />
                <ArrayInput source="info">
                    <SimpleFormIterator>
                        <TextInput source="property" />
                        <TextInput source="value" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default EditProduct;
