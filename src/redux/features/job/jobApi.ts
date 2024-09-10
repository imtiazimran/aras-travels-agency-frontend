import { baseApi } from "../../api/baseApi";

const jobApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getJobs: build.query({
            query: () => ({
                url: `/job/all`,
            }),
            providesTags: ['job']
        }),
        getJob: build.query({
            query: (id) => ({
                url: `/job/${id}`,
            })
        }),
        createJob: build.mutation({
            query: (data) => ({
                url: `/job/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['job']
        }),
        updateJob: build.mutation({
            query: (data) => ({
                url: `/job`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['job']
        }),
        deleteJob: build.mutation({
            query: (id) => ({
                url: `/job/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['job']
        }),
    })
})


export const { useGetJobsQuery, useGetJobQuery, useCreateJobMutation, useUpdateJobMutation, useDeleteJobMutation } = jobApi