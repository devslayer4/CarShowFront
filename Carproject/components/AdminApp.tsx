"use client";

import { Admin, Resource } from 'react-admin';
import dataProvider from '../providers/baseProvider'; // Ensure the correct provider is imported
import { CarCreate, CarEdit, CarList } from './cars';
import { ImageCreate, ImageEdit, ImageList } from './images';
import { UserCreate, UserEdit, UserList } from './users';

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="cars" list={CarList} edit={CarEdit} create={CarCreate} />
        <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate} />
    </Admin>
);

export default AdminApp;