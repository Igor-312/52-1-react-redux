import axios from "axios";

import { createAppSlice } from "store/createAppSlice";
import { RandomJokesSliceState } from "./types";

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: 'default'
}

export const randomJokesSlice = createAppSlice({
  name: 'RANDOM_JOKES',
  initialState: randomJokesInitialState,
  //1. middleware создаём в объекте reducers вместе с обычными редьюсерами, 
  // но с использованием метода asyncThunk
  reducers: create => ({
    //2. Создаём middleware с помощью метода asyncThunk из объекта create
    // метод asyncThunk принимает два аргумента
    //1-й аргумент - асинхронная функция для отправки запроса
    //2-й аргумент - объект c 3-мя свойствами, которые содержат функции обрабатывающие результат
    // выполнения асинхронно функции
    getJoke: create.asyncThunk(
      // асинхронная функция принимает два аргумента
      // 1-й аргумент - arg, он позволяет передавать данные из компонента в асинхронную функцию, например,
      // для отправки данных на сервер при работе с методом post
      // 2-й аргумент - thunkApi (объект), который содержит вспомогательные функции для работы
      // c передачей полученных данных из асинхронной функции в редьюсеры (fulfilled, rejected)
      async (arg, thunkApi) => {
        try {
          const result = await axios.get('https://official-joke-api.appspot.com/random_joke')
          // 3. В случае успешного завершения запроса, возвращаем полученные данные для того, чтобы
          // получить их в обработчике fulfilled (так как только редьюсеры имеют права изменять state)
          return result.data
        } catch (error) {
          //4. В случае ошибки её нужно отправить в обработчик rejected c помощью метода rejectedWithValue
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        //5. Обрабатываем действия, которые должны происходить, когда произошла отправка запроса,
        // но результат мы ещё ждем
        pending: (state: RandomJokesSliceState) => {
          state.status = 'loading'
          state.error = undefined
        },
        // 6. Обработка успешного результата
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = [...state.data, `${action.payload.setup} - ${action.payload.punchline}`]
          state.status = 'success'
        },
        // 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.error = action.payload.message
          state.status = 'error'
        }
      }
    )
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state
  }
})

export const randomJokesActions = randomJokesSlice.actions
export const randomJokesSelectors = randomJokesSlice.selectors
