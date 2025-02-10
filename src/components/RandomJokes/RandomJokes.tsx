import Button from "components/Button/Button";
import { JokeCard, JokesContainer, RandomJokesWrapper, JokeWrapper, JokeText } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { randomJokesActions, randomJokesSelectors } from "store/redux/randomJokes/randomJokesSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function RandomJokes() {
  const { data, error, status } = useAppSelector(randomJokesSelectors.jokeData)
  const dispatch = useAppDispatch();

  const jokes = data.map((joke) => {
    return <JokeText key={v4()}>{joke}</JokeText>
  })

  const getJoke = () => {
    dispatch(randomJokesActions.getJoke())
  }

  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name='GET JOKES' onClick={getJoke} />
        {status === 'loading' && <Spinner />}
        <JokesContainer>
          {jokes}
        </JokesContainer>
        <Button name='DELETE JOKES' onClick={() => { }} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes;
