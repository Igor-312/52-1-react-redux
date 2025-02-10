import Button from "components/Button/Button";
import { RandomAdviceWrapper, AdviceContainer, AdviceCard, AdviceText } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { randomAdviceActions, randomAdviceSelectors } from "store/redux/randomAdvice/randomAdviceSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function RandomAdvice() {
  const { data, error, status } = useAppSelector(randomAdviceSelectors.adviceData)
  const dispatch = useAppDispatch();

  const advice = data.map((advice) => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
  }) 

  const getAdvice = () => {
    dispatch(randomAdviceActions.getAdvice())
  }

  return (
    <RandomAdviceWrapper>
      <AdviceCard>
        <Button name='GET ADVICE' onClick={getAdvice} />
        {status === 'loading' && <Spinner />}
        <AdviceContainer>
          {advice}
        </AdviceContainer>
        {/* <Button name='DELETE ADVICE' onClick={() => { }} /> */}
      </AdviceCard>
    </RandomAdviceWrapper>
  )
}

export default RandomAdvice;
