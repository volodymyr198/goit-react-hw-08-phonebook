import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// www@mail.com

// const axiosBaseQuery =
//     ({ baseUrl } = { baseUrl: '' }) =>
//     async ({ url, method, data, params }) => {
//         try {
//             const result = await axios({
//                 url: baseUrl + url,
//                 method,
//                 data,
//                 params,
//             });
//             return { data: result.data };
//         } catch (axiosError) {
//             let err = axiosError;
//             return {
//                 errror: {
//                     status: err.response?.status,
//                     data: err.response?.data || err.message,
//                 },
//             };
//         }
//     };

// export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: axiosBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//     }),
//     tagTypes: ['Auth'],
//     endpoints: builder => ({
//         register: builder.mutation({
//             query: values => ({
//                 url: `/users/signup`,
//                 method: 'POST',
//                 body: values,
//             }),
//             providesTags: ['Auth'],
//         }),
//     }),
// });

export const authApi = createApi({
    reducerPath: 'authApi',
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
    tagTypes: ['Auth'],
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
            invalidatesTags: ['Auth'],
        }),
    }),
});

export const { useRegisterMutation } = authApi;
