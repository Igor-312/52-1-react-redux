import axios from "axios";

import { createAppSlice } from "store/createAppSlice";
import { RandomAdviceSliceState } from "./types";

const randomAdviceInitialState: RandomAdviceSliceState = {
  data: [],
  error: undefined,
  status: 'default'
}

export const randomAdviceSlice = createAppSlice({
  name: 'RANDOM_ADVICE',
  initialState: randomAdviceInitialState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      
      async (arg, thunkApi) => {
        try {
          const result = await axios.get('https://api.adviceslip.com/advice')
          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: RandomAdviceSliceState) => {
          state.status = 'loading'
          state.error = undefined
        },
        fulfilled: (state: RandomAdviceSliceState, action: any) => {
          state.data = [...state.data, action.payload.slip.advice]
          state.status = 'success'
        },
        rejected: (state: RandomAdviceSliceState, action: any) => {
          state.error = action.payload.message
          state.status = 'error'
        }
      }
    )
  }),
  selectors: {
    adviceData: (state: RandomAdviceSliceState) => state
  }
})

export const randomAdviceActions = randomAdviceSlice.actions
export const randomAdviceSelectors = randomAdviceSlice.selectors
