import { baseApi } from "../../api/baseApi"


const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: "users/login",
                method: "POST",
                body: data
            }),
        }),
        register: build.mutation({
            query: (data) => ({
                url: "users/register",
                method: "POST",
                body: data
            }),
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = authorization