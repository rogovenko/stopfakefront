import axios from 'axios'
import { ADD_FEEDBACK, ALL_FEEDBACKS } from '../types/feedbacksTypes'

export const allFeedbacks = () => (dispatch) => {
  let data = [
    {
      id: 1,
      user_id: 1,
      task_id: 1,
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      data: '13.23.2022'
    },
    {
      id: 2,
      user_id: 2,
      task_id: 1,
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      data: '14.23.2022'
    },
    {
      id: 3,
      user_id: 3,
      task_id: 1,
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      data: '15.23.2022'
    },
  ]
  dispatch({
    type: ALL_FEEDBACKS,
    payload: data
  })
  // fetch('http://localhost:3001/feedback')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_FEEDBACKS,
  //     payload: data
  //   }))
}
export const addFeedback = (response) => ({
  type: ADD_FEEDBACK,
  payload: response,
})

export const addFeedbackThunk = (feedback , task_id, currentUser, stars) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/feedback', {feedback, task_id, currentUser, stars})
  let data = {
    id: 3,
    user_id: 5,
    task_id: task_id,
    feedback: feedback,
    data: '12.24.2022'
  }
  const response = data
  dispatch(addFeedback(response))
}
