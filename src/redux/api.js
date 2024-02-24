// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//importing Token from Local Storage
//import {getTokenLocally} from '../localStorage'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',

  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5173"}),

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    register: builder.mutation({ //use mutation to create a new account
      query: (registeredUser) => ({
        url: "/auth/register",
        method: "POST",
        body: registeredUser,
        headers: {
          //Authorization:"Bearer",
        },
    }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useRegisterMutation } = apiSlice;

//useEndpointnameQuery