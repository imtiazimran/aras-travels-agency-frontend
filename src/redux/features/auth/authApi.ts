import { baseApi } from "../../api/baseApi"


const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: `/user/all`,
            })
        }),
        getMe: build.query({
            query: (token) => ({
                url: `/user/me?token=${token}`,
            }),
        }),
        updateUser: build.mutation({
            query: (data) => ({
                url: `/user/update`,
                method: 'PUT',
                body: data
            })
        })
    }),
})

export const { useGetUsersQuery, useGetMeQuery, useUpdateUserMutation } = authorization