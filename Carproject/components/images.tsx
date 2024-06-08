import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ListProps, EditProps, CreateProps } from 'react-admin';

export const ImageList = (props: ListProps) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="productId" />
            <TextField source="url" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ImageEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="productId" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

export const ImageCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="productId" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);