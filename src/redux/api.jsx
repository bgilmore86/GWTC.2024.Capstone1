// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        onError: (error) => {
          console.log(error);
        },
        invalidatesTags: ['Auth'],
      }),
    }),

    //logout
    logout: builder.mutation({
      query: () => ({
       url: '/auth/logout',
       method: 'POST',
       invalidatesTags: ['Auth'],
      }),
      }),


    //Get products
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products'],
      transformResponse: (response) =>
        response.map((product) => ({
          id: product.id,
          title: product.title,
        })),
    }),

    //Get product by ID
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Product'],
    }),

    //Get cart items
    getCart: builder.query({
      query: () => '/carts/5',
    }),

    //Add item to cart
    addToCart: builder.mutation({
      query: (body) => ({
        url: '/carts',
        method: 'POST',
        body: {
          ...body,
        },
      }),
      invalidatesTags: ['Products'],
    }),

    //Remove item from cart
    removeFromCart: builder.mutation({
      query: ({ cartId, productId }) => ({
        url: `/carts/${cartId}/items/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),

    //Clear entire cart
    clearCart: builder.mutation({
      query: (cartId) => ({
        url: `/carts/${cartId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

//Exported generated hooks for my use in app
export const {
  useLoginMutation,
  useLogoutMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = apiSlice;

export default apiSlice.reducer;
