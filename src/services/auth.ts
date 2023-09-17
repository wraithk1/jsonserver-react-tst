import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const auth = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthRes, LoginReq>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<AuthRes, RegisterReq>({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

const slice = createSlice({
  name: 'auth',
  initialState: { accessToken: null, isAuth: false } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(auth.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken
      state.isAuth = true
      state.user = payload.user
    }),
    builder.addMatcher(auth.endpoints.register.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken
      state.isAuth = true
      state.user = payload.user
    })
  },
})

export const { useLoginMutation, useRegisterMutation } = auth
export default slice.reducer
