import axios from 'axios'
import { ADD_COMMENT, ALL_COMMENTS } from '../types/commentsTypes'

export const allComments = () => (dispatch) => {
  // fetch('http://localhost:3001/comment')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_COMMENTS,
  //     payload: data
  //   }))
    let data = [
      {
        id: 1,
        comment: '2000',
        user_id: 1,
        task_id: 1,
      },
      {
        id: 2,
        comment: '3000',
        user_id: 2,
        task_id: 1,
      },
      {
        id: 3,
        comment: '5000',
        user_id: 1,
        task_id: 1,
      }
    ]
    dispatch({
      type: ALL_COMMENTS,
      payload: data
    })
}
export const addComment = (response) => ({
  type: ADD_COMMENT,
  payload: response,
})

export const addCommentThunk = (comment, task_id) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/comment', {comment, task_id})
  const response = {
    id: 3,
    comment: comment,
    user_id: 5,
    task_id: task_id,
  }
  dispatch(addComment(response))
}
