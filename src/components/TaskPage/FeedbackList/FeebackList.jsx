import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Feedback from './Feedback/Feedback';
import FeedbackForm from './FeedbackForm/FeedbackForm'

export default function FeedbackList() {
  const {id} = useParams()
  const task_id = +id
  const feedbacks = useSelector((state) => state.feedbacks)
  const user = useSelector((state) => state.user)
  const [actualFeedbacks, setActualFeedbacks] = useState([])

  useEffect(() => {
    setActualFeedbacks(feedbacks.filter(el => el.task_id === task_id) )
  }, [feedbacks])


  return (
    <>
      {feedbacks && (
        <div>
            {actualFeedbacks.map((el) => <Feedback key={el.id} {...el} />)}
          <br/>
            {user !== null && (
              <FeedbackForm />
            )}
        </div>
      )}
    </>
  )
}

