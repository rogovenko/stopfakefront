import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Count from "./Count";

import CommentList from '../../CommentList/CommentList'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackList from '../../FeedbackList/FeebackList'
import Chat from '../../../Chat/Chat'
import { deleteTaskThunk } from '../../../../redux/actions/tasksAc'
import { upTaskThunk } from '../../../../redux/actions/tasksAc';
import { addCommentThunk } from '../../../../redux/actions/commentsAc';
import CommentForm from '../../CommentList/CommentForm/CommentForm';

function CurrentTask() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState(1)
  const user = useSelector((state) => state.user)
  const tasks = useSelector(state => state.tasks)
  const task = tasks.find((el) => el.id === +id);
  console.log('TASK', task)

  useEffect(() => {
    if (task) {
      setStatus(task.status)
    }
  }, [tasks])

  const clickHandler = () => {
    dispatch(deleteTaskThunk(id))
    navigate('/')
  }

  const handleMatch = () => {
    console.log('HELLO')
    dispatch(upTaskThunk(id))
  }

  console.log('HEY', task)

  return (
    <>
      {task &&

        (
        <div className={style.currentContainer0}>


        <div className={style.currentContainer}>
          <div className={style.imgLot}>
            <img src={task.image} alt=''/>
          </div>
          <div>
            <div className={style.currentTaskContainer}>


              <h1 className={style.currentTaskHeader}>{task.title}</h1>
              <h3>ID {task.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.createdAt}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;редактировать</h3>
              <br/>
              <p>Продавец</p>
              <div>
                <img className={style.ava} src={task.USER.avatar}/>
                <span className={style.avaSpan}>{task.USER.name}</span>
              </div>

              <div className={style.devide}>
                <p>Описание</p>
                <div className={style.devide1}></div>
                <div className={style.devide2}></div>
              </div>

              <p className={style.description}>{task.description}... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing.</p>

            {task.status == 1 && (
              <>
                <p className={style.countBefore}>До окончания аукциона: &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.count}>
                    <Count deadline = {task.deadline} id = {id}/>
                  </span>
                </p>
                <CommentForm />
              </>
            )}

            {task.status == 2 && (
              <>
                <button type="button" className={style.join2}>
                    <span className={style.btnText}>Аукцион завершен!</span>
              </button>
              </>
            )}

              {/* <div className={style.btnGroup}>
              <div className={style.search}>
                <div>
                  <input className={style.search2} type="text"/>
                </div>
              </div>  

                <button  type="button" className={style.join2}>
                  <span className={style.btnText}>Предложить цену</span>
                </button>
              </div> */}

             
            </div>
     
             
              {/* {user !== null && task.owner === user.id && (
                <button onClick={clickHandler} className={style.btn}>Удалить задачу</button>
                )} */}
          </div>
        </div>
        <div className={style.currentContainer2}>


                    <h1>Ставки</h1>
                    <CommentList />


        </div>
        <div className={style.currentContainer3}>
          <h1>Комментарии</h1>
          <FeedbackList />
        </div>

      </div>)
      }
        <button onClick={handleMatch} type="button" className={style.enter2}>
          <span className={style.btnIcon}>
            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0469 3.51541C27.9812 -7.90046 36.9184 16.2607 14.0469 23.5C-8.82462 16.2607 0.112541 -7.90046 14.0469 3.51541Z" fill="url(#paint0_linear_37_1731)"/>
              <defs>
              <linearGradient id="paint0_linear_37_1731" x1="2.67987" y1="1.62847" x2="21.1021" y2="22.5803" gradientUnits="userSpaceOnUse">
              <stop stop-color="#58DC5D"/>
              <stop offset="1" stop-color="#04CE9B"/>
              </linearGradient>
              </defs>
            </svg>
          </span>
        </button>
    </>
  )
}

export default CurrentTask
