import { baseApi } from "../../api/baseApi"


const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: `/user/all`,
            })
        }),
        getMe: build.query({
            query: () => ({
                url: `/user/me`,
            }),
        })
    }),
})

export const { useGetUsersQuery, useGetMeQuery } = authorization