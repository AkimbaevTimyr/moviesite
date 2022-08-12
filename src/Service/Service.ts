import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3"}),
    endpoints: (builder) => ({
       getBestFilms: builder.query<any, any>({
        query: (page) => `/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=${page}`
       }),
    }),
})

export const {useGetBestFilmsQuery} = movieApi;