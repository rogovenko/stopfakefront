import React, { useEffect } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

function Comment( { sub, type, source, author, comment }) {
  
  const dispatch = useDispatch()
  let bullet = null;
  let typeWord = null
  switch(type){
    case 0: bullet = 'green'
     typeWord = 'Дополнение'
     break;
    case 1: bullet = 'red'
    typeWord = 'Опровержение'
     break;
    case 2: bullet = 'blue'
    typeWord = 'Комментарий'
     break;
    default:{
      typeWord = 'Разное'
      bullet = 'black'
    }
  }



  return (
    <>
        <div className={style.editContainer}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 9" fill="none">
                  <circle cx="4.5" cy="4.5" r="4.5" fill={bullet}/>
            </svg> &nbsp;&nbsp;
            {typeWord}
          </div>

          <div className={style.high}>
              <p className={style.textStyle}>{sub}</p>
          </div>

          <div className={style.line}></div>

          <div>
            <p className={style.comment}>{comment}</p>
          </div>

          <div><span className={style.spanAdd}>Источник&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href='/'>{source}</a></div>
          <div><span className={style.spanAdd}>Автор&nbsp;&nbsp;|&nbsp;&nbsp;</span>{author}</div>
          <button  type="button" className={style.enter2}>
                  <span className={style.btnText}>Принять</span>
            </button>
            <button  type="button" className={style.enter2}>
                      <span className={style.btnText}>Отклонить</span>
            </button>
        </div>

    </>
  )
}

export default Comment

