"use client";

import { DataProvider } from 'react-admin';

const API_URL = 'http://localhost:8080';

const baseProvider: DataProvider = {
    getList: async (resource, params) => {
        const url = new URL(`${API_URL}/${resource}`);
        const query = new URLSearchParams();

        if (params.pagination) {
            query.set('page', params.pagination.page.toString());
            query.set('perPage', params.pagination.perPage.toString());
        }

        if (params.sort) {
            query.set('sort', params.sort.field);
            query.set('order', params.sort.order);
        }

        if (params.filter) {
            Object.keys(params.filter).forEach(key => {
                query.set(key, params.filter[key]);
            });
        }

        url.search = query.toString();

        const response = await fetch(url.toString(), {
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data, total: data.length };
    },
    getOne: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    create: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params.data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    update: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params.data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    delete: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    deleteMany: async (resource, params) => {
        const query = params.ids.map(id => `id=${id}`).join('&');
        const response = await fetch(`${API_URL}/${resource}?${query}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    getMany: async (resource, params) => {
        const query = params.ids.map(id => `id=${id}`).join('&');
        const response = await fetch(`${API_URL}/${resource}?${query}`, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    },
    getManyReference: async (resource, params) => {
        const query = new URLSearchParams({
            target: params.target,
            id: params.id.toString()
        });

        const response = await fetch(`${API_URL}/${resource}?${query.toString()}`, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data, total: data.length };
    },
    updateMany: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params.data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data };
    }
};

export default baseProvider;