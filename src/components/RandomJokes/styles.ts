import styled from '@emotion/styled';

export const RandomJokesWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: rebeccapurple;
 flex: 1;
 padding: 50px;
`
export const JokeCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 gap: 100px;
 width: 700px;
 min-height: 400px;
 padding: 20px;
 background-color: white;
 border: 2px solid;
 border-radius: 10px;
`

export const JokesContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`

export const JokeText = styled.div`
 font-size: 24px;
 font-weight: bold;
 color: rebeccapurple;
`

export const JokeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`