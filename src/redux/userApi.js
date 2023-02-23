import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/users',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Users'],

    endpoints: builder => ({
        register: builder.mutation({
            query: values => ({
                url: `/signup`,
                method: 'POST',
                body: {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                },
            }),
            invalidatesTags: ['Users'],
        }),
        login: builder.mutation({
            query: values => ({
                url: `/login`,
                method: 'POST',
                body: {
                    email: values.email,
                    password: values.password,
                },
            }),
            invalidatesTags: ['Users'],
        }),
        logOut: builder.mutation({
            query: () => ({
                url: `/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }),
        getCurrent: builder.query({
            query: () => `/current`,
            invalidatesTags: ['Users'],
        }),
    }),
});

export const {
    useRegisterMutation,
    useGetCurrentQuery,
    useLogOutMutation,
    useLoginMutation,
} = userApi;
