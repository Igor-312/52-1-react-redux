// 1. Импортируем функцию, с помощью которой мы создаём slice
import { createAppSlice } from '../../createAppSlice';
import { CounterStateSlice } from './types';

// 4.1 Cоздаём объект с первоначальным состояние, который потом передаём в initialState
const counterInitialState: CounterStateSlice = {
  count: 0
}

// 2. Создаём слайс для каунтера с помощью вызова функции createAppSlice
// в которую передаём объект настройки
export const counterSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться объект со значение каунтера (state)
  // стейт для отдельных частей данных всегда представляет собой объект
  name: "COUNTER",
  // 4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // 5. Создаём объект, внутри которого будут храниться редьюсеры (функции, которые отвечают
  // за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
    minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 })
  }),
  //  6. Создаём селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count
  }
})

//7. Экспорт экшенов и селекторов для возможности их использования в компонентах
export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors