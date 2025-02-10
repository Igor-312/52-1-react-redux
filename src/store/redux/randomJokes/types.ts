export interface RandomJokesSliceState {
  data: string[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
