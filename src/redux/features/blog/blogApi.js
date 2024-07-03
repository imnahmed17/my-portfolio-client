import { baseApi } from '../../api/baseApi';

const blogApi = baseApi.injectEndpoints({
    tagTypes: ['all-blog'],
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: () => 'blogs',
            providesTags: ['all-blog'],
        }),
        getBlogById: builder.query({
            query: (id) => `blogs/${id}`,
            providesTags: ['all-blog'],
        }),
        addBlog: builder.mutation({
            query: (data) => ({
                url: '/blogs',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['all-blog'],
        }),
    }),
});

export const { useGetAllBlogQuery, useGetBlogByIdQuery, useAddBlogMutation } = blogApi;