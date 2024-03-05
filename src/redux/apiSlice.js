// Import the RTK Query methods
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/"}),

  // The "endpoints" represent operations and requests for this server
  //login
  endpoints: (builder) => ({
      login: builder.mutation({ //use mutation to create a new account
        query: (registeredUser) => ({
          url: "/auth/login",
          method: "POST",
          body: registeredUser,
          }),
        }),

        //
        
    }),
  })
// Export hooks for usage in functional components
export const { useLoginMutation } = apiSlice;

