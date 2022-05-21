import axios from 'axios'
import { ADD_USER, DEL_USER, SIGNIN_USER, AUTH_CHECK, EDIT_USER } from '../types/userTypes'

// signup - регистрация пользователя
export const addUserAction = (response) => ({
  type: ADD_USER,
  payload: response,
})

export const addUser = (formData) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/users/signup', { formData })
  let userFromBack = {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
  }
  const response = userFromBack.data
  dispatch(addUserAction(response))
}

// signout - выход пользователя
export const delUserAction = (user) => ({
  type: DEL_USER,
  payload: user
})

export const delUser = () => (dispatch) => {
  console.log('Delete user')
  // axios.get('http://localhost:3001/users/signout')
  dispatch(delUserAction())
}

// signup - авторизация пользователя
export const signinUserAction = (response) => ({
  type: SIGNIN_USER,
  payload: response,
})

export const signinUser = (signinForm) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/users/signin', { signinForm })
  let userFromBack = {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
    }
  dispatch(signinUserAction(userFromBack))
}

// проверка пользователя
export const checkUserAction = (response) => ({
  type: AUTH_CHECK,
  payload: response,
})

export const checkUser = () => async (dispatch) => {
  // const userFromBack = await axios('http://localhost:3001/users/check')
  let userFromBack = {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
  }
  dispatch(checkUserAction(userFromBack))
}

export const editUser = (data) => async(dispatch) => {
  try {
    const reductUser = await editUserToServer(data)
    dispatch({
      type: EDIT_USER,
      payload: reductUser
    })
  } catch (err) {
    
    console.log(err);
  }
}

// редактировать
export const editUserToServer = async (data) => {
  // const response = await fetch('http://localhost:3001/users/edit/'+ data.id, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   credentials: 'include',
  //   body: JSON.stringify(data)
  // })
  // if (response.ok) {
  //   return await response.json()
  // } else {
  //   throw Error('Noooooooooooo :(((')
  // }
  return {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
  }
}
