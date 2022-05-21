import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedbackThunk } from '../../../../redux/actions/feedbacksAc'

function FeedbackForm () {
  const {id} = useParams()
  const task_id = +id
  let currentUser = null
  const user = useSelector((state) => state.user)
  const tasks = useSelector((state) => state.tasks)
  const task = tasks.filter((el) => el.id === task_id)[0]
  if (user.id === task.worker) {
    currentUser = task.owner
  }
  if (user.id === task.owner) {
    currentUser = task.worker
  }

  const [feedback, setFeedback] = useState('')
  const [stars, setStars] = useState("5")
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setFeedback(e.target.value)
  }

  const inputChange2 = (e) => {
    setStars(e.target.value)
  }
  
  const feedbackHandler = (e) => {
    e.preventDefault()
    dispatch(addFeedbackThunk(feedback , task_id, currentUser, stars))
    setFeedback('')
  }

  return (
    <div className={style.mainContainer} >
      <div className={style.userContainer}>
      <img className={style.avatar} src={user.avatar}></img>
      <form onSubmit={(e) => feedbackHandler(e)}>
        <textarea 
          className={style.input}
          placeholder='Введите текст'
          type='text'
          name='feedback'
          value={feedback}
          onChange={inputChange}
        />
        <div className={style.containerbutton}>
        <button type="submit" className={style.join2}>
                  <span className={style.btnText}>Отправить</span>
        </button>
          {/* <div className={style.starRating}>
            <input onChange={inputChange2} type="radio" name="stars" id="star-a" value="5"/>
            <label for="star-a"></label>
            <input onChange={inputChange2} type="radio" name="stars" id="star-b" value="4"/>
            <label for="star-b"></label>
            <input onChange={inputChange2} type="radio" name="stars" id="star-c" value="3"/>
            <label for="star-c"></label>
            <input onChange={inputChange2} type="radio" name="stars" id="star-d" value="2"/>
            <label for="star-d"></label>
            <input onChange={inputChange2} type="radio" name="stars" id="star-e" value="1"/>
            <label for="star-e"></label>
          </div> */}
        </div>
      </form>
      </div>
    </div>
  )
}

export default FeedbackForm
