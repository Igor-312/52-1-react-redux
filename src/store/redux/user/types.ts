export interface UserData {
  id: string,
  userName: string,
  age: string,
  jobTitle: string
}

export interface UserSliceState {
  users: UserData[]
}