import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput, SelectInput
} from 'react-admin';


const CreateProduct = (props) => {
    return (
        <Create title="Add a product" {...props}>
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
            </SimpleForm>
        </Create>
    );
};

export default CreateProduct;