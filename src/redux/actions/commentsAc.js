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
        task_id: 1,
        type: 2,
        sub: 'Росатом, которому исполняется 15 лет',
        subStart: 0,
        subEnd: 42,
        source: 'РИА новости',
        slink: 'https://ria.ru/20161116/1481460969.html',
        comment: '15 лет грандиозного развития и побед! Виват!',
        author: 'MrBelka',
      },
      {
        id: 2,
        task_id: 1,
        type: 0,
        sub: 'и необходимо',
        subStart: 94,
        subEnd: 110,
        source: 'Russia Today',
        slink: 'https://www.rt.com/business/555904-russia-thailand-trade-boost-sanctions/',
        comment: 'Необходимость также определяется контрактными обязательстваи РФ перед правительством Турции',
        author: 'Джон Федор',
      },
      {
        id: 3,
        task_id: 1,
        type: 1,
        sub: 'Владимир Путин',
        subStart: 164,
        subEnd: 178,
        source: 'ИА Панорама',
        slink: 'https://panorama.pub/news/badcomedian-avatar---eto',
        comment: 'Путин не мог этого заявить, он давно умер, а вместо него страной управляют рептилии',
        author: 'КислыйФрукт',
        },
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

export const addCommentThunk = (data) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/comment', {comment, task_id})
  const response = data
  dispatch(addComment(response))
}
