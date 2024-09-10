import { baseApi } from "../../api/baseApi"


const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: `/user/all`,
            }),
            providesTags: ['user']
        }),
        getMe: build.query({
            query: (token) => ({
                url: `/user/me?token=${token}`,
            }),
            providesTags: ['user']
        }),
        updateUser: build.mutation({
            query: (data) => ({
                url: `/user/update`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['user']
        })
    }),
})

export const { useGetUsersQuery, useGetMeQuery, useUpdateUserMutation } = authApi