import { createAppSlice } from "store/createAppSlice"
import { FeetbackSliceState } from "./types"

const feetbackInitialState: FeetbackSliceState = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feetbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeetbackSliceState) => {
      state.likeCount = state.likeCount + 1
    }),
    addDislike: create.reducer((state: FeetbackSliceState) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    // способ очистки - вместо свойств
    resetResult: create.reducer(() => feetbackInitialState),
  }),
  selectors: {
    // если в объекте несколько свойств, то удобнее вернуть сразу весь объект state
    feedbackData: (state: FeetbackSliceState) => state,
  },
})

export const feedbackActions = feedbackSlice.actions
export const feedbackSelectors = feedbackSlice.selectors
