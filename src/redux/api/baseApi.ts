import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseApi } from "../baseApi";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BaseApi
    }),
    endpoints: ()=> ({})
})