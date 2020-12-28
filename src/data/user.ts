export type User = {
  id: string
  name: string
  password: string
}

export const UserData: User = {
  id: '12345',
  name: 'sample_taro',
  password: '12345',
}

export const isUser = (arg: unknown): arg is User => {
  const u = arg as User

  return (
    typeof u?.id === 'string' &&
    typeof u?.name === 'string' &&
    typeof u?.password === 'string'
  )
}
