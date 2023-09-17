interface User {
  email: string
  id: number
}

interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  userId: number
}

interface ListResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

interface AuthRes {
  accessToken: string
  user: Omit<Contact, 'userId'>
}

interface LoginReq extends Omit<User, 'id'> {
  password: string
}

interface RegisterReq extends Omit<Contact, 'id' | 'userId'> {
  password: string
}

interface AuthState {
  accessToken: string | null
  isAuth: boolean
  user: Omit<Contact, 'userId'> | null
}