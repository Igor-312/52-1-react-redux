import Button from "components/Button/Button";
import { RandomAdviceWrapper, AdviceContainer, AdviceCard, AdviceText, Error } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { randomAdviceActions, randomAdviceSelectors } from "store/redux/randomAdvice/randomAdviceSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function RandomAdvice() {
  const { data, error, status } = useAppSelector(randomAdviceSelectors.adviceData)
  const dispatch = useAppDispatch();

  const advice = data.map((advice: string) => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
  }) 

  const getAdvice = () => {
    dispatch(randomAdviceActions.getAdvice())
  }

  const deleteAdvices = ()=>{
    dispatch(randomAdviceActions.deleteAdvices())
  }

  const isLoading: boolean = status === 'loading'

  return (
    <RandomAdviceWrapper>
      <AdviceCard>
        <Button name='GET ADVICE' onClick={getAdvice} disabled = {isLoading}/>
        {status=== 'error' && <Error>{error}</Error>}
        {isLoading && <Spinner />}
        <AdviceContainer>
          {advice}
        </AdviceContainer>
        {data.length !== 0 && <Button name='Delete All Advice' onClick={deleteAdvices} />}
      </AdviceCard>
    </RandomAdviceWrapper>
  )
}

export default RandomAdvice;
