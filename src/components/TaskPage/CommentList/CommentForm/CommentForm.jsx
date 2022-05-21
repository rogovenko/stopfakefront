import React, { useEffect } from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentThunk } from '../../../../redux/actions/commentsAc'

function CommentForm () {

  const {id} = useParams()



  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setComment(e.target.value)
  }

  const task_id = +id

  const commentHandler = (e) => {
    e.preventDefault()
    dispatch(addCommentThunk(comment , task_id))
    setComment('')
  }


  return (
      <form className={style.mainContainer} onSubmit={(e) => commentHandler(e)}>
        <div className={style.btnGroup}>
          <div className={style.search}>
            <div>
              <input onChange={inputChange} value={comment} className={style.search2} type="text"/>
            </div>
          </div>  

          <button type="submit" className={style.join2}>
                <span className={style.btnText}>Предложить цену</span>
          </button>
        </div>
      </form>
  )
}

export default CommentForm
