import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ListProps, EditProps, CreateProps } from 'react-admin';

export const UserList = (props: ListProps) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);