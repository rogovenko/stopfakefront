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
        title: 'Греческая ваза',
        category: 'Антиквариат',
        description: 'Ваза I в до н.э., растоможена. Достал со дна политик.',
        deadline: '2022-04-24 16:30:00',
        image: '/img/lot1.png',
        isDone: false,
        status: 1,
        owner: 1,
        worker: null,
        createdAt: '2022-01-15 02:00:00',
        updatedAt: '2022-01-15 02:00:00',
        USER: {
          name: 'Слава К.',
          avatar: '/img/ava1.png'
        }
      },
      {
        id: 2,
        title: 'VW Golf VI GTI 2.0',
        category: 'Автомобиль',
        description: 'Культовый хотхэтч немецкой сборки на 245 л.с.',
        deadline: '2022-04-24 16:30:00',
        image: '/img/lot2.png',
        isDone: false,
        status: 1,
        owner: 2,
        worker: 6,
        createdAt: '2022-01-17 02:00:00',
        updatedAt: '2022-01-17 02:00:00',
        USER: {
          name: 'КФХ “АгроФуд”',
          avatar: '/img/ava2.png'
        }
      },
      {
        id: 3,
        title: 'Коллекционная монета',
        category: 'Антиквариат',
        description: 'Швейцарская монета 20 раппенов 2011 года.',
        deadline: '2022-04-24 16:30:00',
        image: '/img/lot3.png',
        isDone: false,
        status: 3,
        owner: 5,
        worker: 7,
        createdAt: '2022-01-19 02:00:00',
        updatedAt: '2022-01-19 02:00:00',
        USER: {
          name: 'Anonimus #0570',
          avatar: '/img/ava3.png'
        }
      },
      {
        id: 4,
        title: 'BitMonkey NFT',
        category: 'Антиквариат',
        description: 'Известный NFT-токен на холсте маслом.',
        deadline: '2022-04-24 16:30:00',
        image: '/img/lot4.jpeg',
        isDone: false,
        status: 3,
        owner: 5,
        worker: 7,
        createdAt: '2022-01-19 02:00:00',
        updatedAt: '2022-01-19 02:00:00',
        USER: {
          name: 'Tesla, Inc.',
          avatar: '/img/ava4.png'
        }
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
