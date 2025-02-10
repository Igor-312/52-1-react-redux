import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedback/feedbackSlice"
import Button from "../Button/Button"
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
} from "./styles"

function Feedback() {
  // const feedbackData = useAppSelector(feedbackSelectors.feedbackData)
  // console.log(feedbackData);
  const { likeCount, dislikeCount } = useAppSelector(
    feedbackSelectors.feedbackData,
  )
  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackActions.addLike())
  }
  const addDislike = () => {
    dispatch(feedbackActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackActions.resetResult())
  }

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likeCount}</Result>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikeCount}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={resetResults} />
    </FeedbackContainer>
  )
}

export default Feedback
