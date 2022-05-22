import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskThunk } from '../../../../redux/actions/tasksAc'
import { addCommentThunk } from '../../../../redux/actions/commentsAc';
import Comment from '../../CommentList/Comment/Comment';

function CurrentTask() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tasks = useSelector(state => state.tasks)
  const task = tasks.find((el) => el.id === +id);

  const reviews = useSelector(state => state.comments);

  const [isEdit, setIsEdit] = useState(false)
  const [comment, setComment] = useState('');
  const [source, setSource] = useState('');
  const [select, setSelect] = useState('')
  const [highlight, setHighlight] = useState('')

  let cre = task.createdAt.split(' ');
  let temp1 = cre[1].split(':')
  let creDate = temp1[0] + ':' + temp1[1]
  let upd = task.updatedAt.split(' ');
  let temp2 = upd[1].split(':')
  let updDate = temp2[0] + ':' + temp2[1]
  


  
    let data = {
      text: "\n    Росатом, которому исполняется 15 лет, стал одним из российских технологических лидеров,\n     и необходимо сохранить эту тенденцию. Об этом заявил президент РФ Владимир Путин \n     на встрече с руководителем госкорпорации Алексеем Лихачевым\n    ",
      source: "Новая Газета",
      editions: [
        {
          subStart: 0,
          subEnd: 42,
        },
        {
          subStart: 94,
          subEnd: 110,
        },
        {
          subStart: 164,
          subEnd: 178,
        },      

      ],  
    }
    
    let temp = {
      text: 'assaffsf'
    }


  const handleEdit = () => {
    setIsEdit(true);
  }

  const handleSend = (e) => {
    e.preventDefault()
    let selection = highlight
    var start = data.text.indexOf(selection);
    var end = start + selection.length;
    console.log('SEND', comment, source, select, highlight)
    console.log('HELLO', selection, start, end)
    if(highlight == undefined){
      highlight = null
      start = null
      end = null
    }
    dispatch(addCommentThunk({
      id: 4,
      task_id: 1,
      type: +select,
      sub: highlight,
      subStart: start,
      subEnd: end,
      source: 'Источник',
      slink: source,
      comment: comment,
      author: 'Анонимно',
    }))
    setSource('')
    setComment('')
    setSelect('')
    setHighlight('')
    setIsEdit(false);
  }

  const handleCancel = () => {
    setSource('')
    setComment('')
    setSelect('')
    setIsEdit(false);
    console.log('CANCEL')
  }

  const handleHighlight = () => {
    setHighlight(window.getSelection().toString())
    console.log('HIGH', highlight)
  }

  const selectionHandler = () => {
    console.log('CLICK')
  }

  let result = [];

  for(let i = 0; i < reviews.length; i++){
    if(reviews.highlight === null) continue;
    if(reviews[i].subStart === 0){
      let sub2 = data.text.substring((reviews[i].subStart), reviews[i].subEnd);
      result.push(<button onClick={selectionHandler} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" className={style.textStyle}>{sub2}</button>)
      let sub = data.text.substring((reviews[i].subEnd), reviews[i+1].subStart);
      result.push(<span className={style.textStyle2}>{sub}</span>)
      continue;
    }
    if(i === reviews.length - 1){
      let sub2 = data.text.substring((reviews[i].subStart), reviews[i].subEnd);
      result.push(<button onClick={selectionHandler} className={style.textStyle}>{sub2}</button>)
      let sub = data.text.substring((reviews[i].subEnd), data.text.length);
      result.push(<span className={style.textStyle2}>{sub}</span>)
    } else {
      let sub2 = data.text.substring((reviews[i].subStart), reviews[i].subEnd);
      result.push(<button onClick={selectionHandler} className={style.textStyle}>{sub2}</button>)
      let sub = data.text.substring((reviews[i].subEnd), reviews[i+1].subStart);
      result.push(<span className={style.textStyle2}>{sub}</span>)
    }
  }

  useEffect(() => {
 
  }, [reviews])
  


  useEffect(() => {
    
  }, [isEdit])
  
  useEffect(() => {
    

  }, [highlight])
  return (
    <div className={style.taskContainer}>
      <div className={style.cardLots}>
        <img src={task.image} alt=''/>
        <h2>{task.title}</h2>
        <h3><span className={style.spanAdd}>категория&nbsp;&nbsp;|&nbsp;&nbsp;</span>{task.category}</h3>
        <div className={style.date}>
          <p>{cre[0]}&nbsp;&nbsp;{creDate}&nbsp;&nbsp;
            <span>(обновлено: {upd[0]}&nbsp;&nbsp;{updDate})</span>
          </p>
        </div>
      </div>
      <div className={style.article}>
        <text onMouseUp={handleHighlight}>
          {result}
        </text>
      </div>
      {!isEdit && (
        <button onClick={handleEdit} type="button" className={style.enter2}>
                <span className={style.btnText}>дополнить / опровергнуть</span>
        </button>
      )}
      {isEdit && (
        <form onSubmit={handleSend} className={style.editContainer}>
          <div className={style.btnHighCont}>
            <div>
              Выберите фрагмент
            <p>(нажмите кнопку справа, если ваш фрагмент не появился)</p>
            </div>
          <button onClick={handleHighlight} type="button" className={style.enter3}>
                  <span className={style.btnText}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                  </svg></span>
          </button>
          </div>
          {highlight && (
            <p className={style.editContainerHigh}>{highlight}</p>
          )}
          <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder='комментарий'></input>
          <input value={source} onChange={(e) => setSource(e.target.value)}placeholder='ссылка на источник'></input>
          <select value={select} onChange={(e) => setSelect(e.target.value)} aria-label="Edit mode">
            <option selected>Выберите действие</option>
            <option value="0">Дополнить</option>
            <option value="1">Опровергнуть</option>
            <option value="2">Комментировать</option>
          </select>
          <button onClick={handleSend} type="submit" className={style.enter2}>
                  <span className={style.btnText}>Отправить</span>
          </button>
          <button onClick={handleCancel} type="button" className={style.enter2}>
                  <span className={style.btnText}>Отмена</span>
          </button>
        </form>
      )}

      {reviews.map((el) => <Comment key={el.id} {...el} />)}
      <div>
      </div>

      
    </div>
  )
}

export default CurrentTask
