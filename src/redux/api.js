import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (registeredUser) => ({
        url: "/auth/login",
        method: "POST",
        body: registeredUser,
      }),
    }),

    // Defining endpoints to be used in app

    //getting All products
    getProducts: builder.query({
      query: () => "/products",
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //get all carts
    getCarts: builder.query({
      query: () => "/carts",
    }),

    // Cart operations
    addToCart: builder.mutation({
      query: (product) => ({
        url: "/carts/add",
        method: "PUT",
        body: product,
      }),
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/carts/remove/${productId}`,
        method: "DELETE",
      }),
    }),
    removeAllFromCart: builder.mutation({
      query: () => ({
        url: "/carts/removeAll",
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for use in functional components
export const {
  useLoginMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useGetCartsQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useRemoveAllFromCartMutation,
} = apiSlice;