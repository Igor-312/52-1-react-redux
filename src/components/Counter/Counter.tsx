import Button from "../Button/Button";
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles";
//9. Импортируем хуки для диспатча и получения данных (селекторов)
import { useAppDispatch, useAppSelector } from "store/hooks";
//10. Импортируем экшены и селекторы, которые были созданы и экспортированы  в файле со слайсом
import { counterActions, counterSelectors } from "store/redux/counter/counterSlice";

function Counter() {
  // 11. Забираем значение каунтера из store
  const counter = useAppSelector(counterSelectors.counterValue)

  //12. Получаем функцию dispatch, которую возвращает хук useDispatch
  const dispatch = useAppDispatch()

  const onMinus = ()=>{
    //13. Диспатчим экшен (передаём в вызов функции dispatch необходим идентификатор действия(action))
    dispatch(counterActions.minus())
  }

  const onPlus = ()=>{
    //13. Диспатчим экшен (передаём в вызов функции dispatch необходим идентификатор действия(action))
    dispatch(counterActions.plus())
  }

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" type="button" onClick={onMinus} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" type="button" onClick={onPlus} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;