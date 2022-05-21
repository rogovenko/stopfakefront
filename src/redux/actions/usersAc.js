import { ALL_USERS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'

export const getAllUsers = () => (dispatch) => {

  // fetch('http://localhost:3001/users')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_USERS,
  //     payload: data
  //   }))
    let data = [
      {
        id: 1,
        name: 'Слава К.',
        email: 'merch@gmail.com',
        role: 2,
        avatar: '/img/ava1.png',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 2,
        name: 'КФХ “АгроФуд"',
        email: 'merch@gmail.com',
        role: 2,
        avatar: '/img/ava2.png',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 3,
        name: 'Anonimus #0570',
        email: 'merch@gmail.com',
        role: 3,
        avatar: '/img/ava3.png',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 4,
        name: 'Tesla, Inc.',
        email: 'merch@gmail.com',
        role: 3,
        avatar: '/img/ava4.png',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 5,
        name: 'Федор Достоевский',
        email: 'merch@gmail.com',
        role: 3,
        avatar: '/img/ava0.png',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      }
    ];
    dispatch({
      type: ALL_USERS,
      payload: data
    })
}

export const searchUser = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_WORKER,
    payload: data
  })
}
