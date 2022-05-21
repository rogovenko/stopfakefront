import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm'
import style from './style.module.css'

export default function CommentList() {
  const {id} = useParams()
  const task_id = +id

  const comments = useSelector((state) => state.comments)
  const user = useSelector((state) => state.user)
  const [actualComments, setActualComments] = useState([])
  useEffect(() => {
    setActualComments(comments.filter(el => el.task_id === task_id).reverse())
  }, [comments])
  return (

    <>
      {/* {actualComments !== [] && user && (
        <div>
          {
            user.role === 3 && (
              <CommentForm />
            )
          }
          <br/>
        </div>
      )
    } */}
    {actualComments !== [] && (
      <div>
        <table className={style.tableContainer}>
        <thead>
          <tr>
            <th scope="col">Ставка</th>
            <th scope="col">Дата и время</th>
            <th scope="col">Пользователь</th>
          </tr>
        </thead>
        <tbody>
          {actualComments.map((el) => <Comment key={el.id} {...el} />)}
        </tbody>
        </table>
      </div>
      )
    }
    
    
    </>
  )
}

