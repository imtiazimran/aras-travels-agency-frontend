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
        })
    }),
})

export const { useGetUsersQuery, useGetMeQuery } = authorization