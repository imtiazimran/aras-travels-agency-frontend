import { baseApi } from "../../api/baseApi"


const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getUsers: build.query({
          query: () => ({
              url: `/user/all`,
          })
      })
    }),
})

export const { useGetUsersQuery } = authorization