import { createAppSlice } from "store/createAppSlice";
import { FeedbackSliceState } from "./types";

const feedbackInitialState: FeedbackSliceState = {
  likeCount: 0,
  dislikeCount: 0
}

export const feedbackSlice = createAppSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => { state.likeCount = state.likeCount + 1 }),
    addDislike: create.reducer((state: FeedbackSliceState) => { state.dislikeCount = state.dislikeCount + 1 }),
    //способ очистки - вместо перезаписи свойств просто вернём initialState
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    //если в объекте state несколько свойств, то удобнее вернуть сразу весь объект state
    // и уже в компоненте забрать отдельные свойства
    feedbackData: (state: FeedbackSliceState) => state
  }
})

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
