import axios from 'axios'
import { ADD_TASK, ALL_TASKS, TASK_UP, FILTER_TASK, SEARCH_TASK } from '../types/tasksTypes'

export const allTasks = () => (dispatch) => {
  // fetch('https://th.zerobot.ru/lots.php')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_TASKS,
  //     payload: data
  //   }))
    let data = [
      {
        id: 1,
        title: 'ВСУ устроили провокацию в подконтрольном им поселке Николаевка, есть жертвы',
        category: 'Политика',
        image: '/img/news1.jpeg',
        status: 1,
        createdAt: '2022-05-21 02:00:00',
        updatedAt: '2022-05-21 02:00:00',
        user: 1
      },
      {
        id: 2,
        title: 'Газпром подтвердил остановку поставок газа в Финляндию',
        category: 'Политика',
        image: '/img/news2.jpeg',
        status: 1,
        createdAt: '2022-05-21 02:00:00',
        updatedAt: '2022-05-21 02:00:00',
        user: 2
      },
      {
        id: 3,
        title: 'ITF поддержала решение не начислять очки теннисистам на Уимблдоне',
        category: 'Спорт',
        image: '/img/news3.jpeg',
        status: 1,
        createdAt: '2022-05-21 02:00:00',
        updatedAt: '2022-05-21 02:00:00',
        user: 2
      },
      {
        id: 4,
        title: 'Москва закрывает въезд в Россию для 963 американцев',
        category: 'Политика',
        image: '/img/news4.jpeg',
        status: 1,
        createdAt: '2022-05-21 02:00:00',
        updatedAt: '2022-05-21 02:00:00',
        user: 3
      },
    ]
    dispatch({
      type: ALL_TASKS,
      payload: data
    })
}
export const addTask = (response) => ({
  type: ADD_TASK,
  payload: response,
})

export const addTaskThunk = (task) => async (dispatch) => {

  const userFromBack = await axios.post('http://localhost:3001/tasks', { task })
  const response = userFromBack.data
  dispatch(addTask(response))
}

export const upTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const upTaskThunk = (task_id) => async (dispatch) => {
  // const userFromBack = await axios.patch('http://localhost:3001/tasks', { task_id, user_id })
  // const response = ''
  dispatch(upTask(task_id))
}

export const filteredTask = (data) => (dispatch) => {

  dispatch({
    type: FILTER_TASK,
    payload: data
  })
}

export const searchTask = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_TASK,
    payload: data
  })
}

export const deleteTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const deleteTaskThunk = (task_id) => async (dispatch) => {
  const userFromBack = await axios.patch('http://localhost:3001/tasks/delete', { task_id })
  const response = userFromBack.data
  dispatch(deleteTask(response))
}
