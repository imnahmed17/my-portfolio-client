import { baseApi } from '../../api/baseApi';

const skillApi = baseApi.injectEndpoints({
    tagTypes: ['all-skill'],
    endpoints: (builder) => ({
        getAllSkill: builder.query({
            query: (category) => ({
                url: `/skills?category=${category}`,
                method: 'GET',
            }),
            providesTags: ['all-skill'],
        }),
        addSkill: builder.mutation({
            query: (data) => ({
                url: '/skills',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['all-skill'],
        }),
    }),
});

export const { useGetAllSkillQuery, useAddSkillMutation } = skillApi;