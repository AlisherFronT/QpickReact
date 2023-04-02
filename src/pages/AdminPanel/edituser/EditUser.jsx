import React from 'react';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

const EditUser = (props) => {
    return (
        <Edit title='Edit Page' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="email" />
                <TextInput source="login" />
                <NumberInput source="password"/>
            </SimpleForm>
        </Edit>
    );
};

export default EditUser;