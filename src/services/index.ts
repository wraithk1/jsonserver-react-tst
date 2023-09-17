import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../store'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
  
      return headers
    }
  }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], string | void>({
      query: (phrase) => `contacts?q=${phrase}`,
      providesTags: ['Contacts'],
    }),
    getContact: builder.query<Contact, number>({
      query: (id) => `contacts/${id}`
    }),
    addContact: builder.mutation<void, Omit<Contact, 'id'>>({
      query: (body) => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts']
    }),
    editContact: builder.mutation<void, Contact>({
      query: (body) => ({
        url: `contacts/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Contacts']
    }),
    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts']
    }),
  }),
})

export const {
  useGetContactQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation
} = api