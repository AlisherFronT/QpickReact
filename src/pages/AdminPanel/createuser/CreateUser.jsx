import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput
} from 'react-admin';


const CreateUser = (props) => {
    return (
        <Create title="Add a product" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="email" />
                <TextInput source="login" />
                <NumberInput source="password"/>
            </SimpleForm>
        </Create>
    );
};

export default CreateUser;