import { useState } from "react";
import Button from "components/Button/Button";
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result } from "./styles";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  console.log("render");

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = ():void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislike(0);
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislike}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
