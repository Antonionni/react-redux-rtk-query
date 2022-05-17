import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost  } from '../../models/IPost';


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], void>({
            query: () => ({
                url: '/posts',
            }),
            providesTags: (result) => ['Post'],
        }),
        deletePost: build.mutation<IPost, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),
        appendPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Post'],
        })
    })
})