import { baseApi } from '../../api/baseApi';

const projectApi = baseApi.injectEndpoints({
    tagTypes: ['all-project'],
    endpoints: (builder) => ({
        getAllProject: builder.query({
            query: () => 'projects',
            providesTags: ['all-project'],
        }),
        getProjectsByCategory: builder.query({
            query: (category) => `projects?category=${category}`,
            providesTags: ['all-project'],
        }),
        addProject: builder.mutation({
            query: (data) => ({
                url: '/projects',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['all-project'],
        }),
    }),
});

export const { useGetAllProjectQuery, useGetProjectsByCategoryQuery , useAddProjectMutation } = projectApi;