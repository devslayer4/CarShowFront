import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, NumberInput, Create, ListProps, EditProps, CreateProps } from 'react-admin';

export const CarList = (props: ListProps) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="price" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CarEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <NumberInput source="price" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <NumberInput source="power" />
            <NumberInput source="placeNumber" />
            <TextInput source="status" />
            <TextInput source="type" />
        </SimpleForm>
    </Edit>
);

export const CarCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <NumberInput source="price" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <NumberInput source="power" />
            <NumberInput source="placeNumber" />
            <TextInput source="status" />
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);