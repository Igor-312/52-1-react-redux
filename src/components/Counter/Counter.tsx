import Button from "../Button/Button";
import {
  CounterContainerStyled,
  ButtonContainerStyled,
  ResultContainerStyled,
} from "./styles";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <CounterContainerStyled>
      <ButtonContainerStyled>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtonContainerStyled>
      <ResultContainerStyled>{counter}</ResultContainerStyled>
      <ButtonContainerStyled>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtonContainerStyled>
    </CounterContainerStyled>
  );
}

export default Counter;
