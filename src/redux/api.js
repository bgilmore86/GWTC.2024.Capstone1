import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),

  //authenticated login
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (registeredUser) => ({
        url: "/auth/login",
        method: "POST",
        body: registeredUser,
      }),
    }),
    //gettingAll products
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),

  // Cart operations
  
      addToCart: (product) => ({
        url: '/cart/add',
        method: 'PUT',
        body: product,
      }),
      removeFromCart: (productId) => ({
        url: '/cart/remove',
        method: 'DELETE',
        body: { productId },
      }),
    },
);



// Export hooks for usage in functional components
export const {
useLoginMutation,
useGetProductsQuery,
useAddToCart,
useRemoveFromCart

} = apiSlice;