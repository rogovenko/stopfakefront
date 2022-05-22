import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'


function Task({ id, title, category, image, createdAt, updatedAt }) {

  let cre = createdAt.split(' ');
  let temp1 = cre[1].split(':')
  let creDate = temp1[0] + ':' + temp1[1]
  let upd = updatedAt.split(' ');
  let temp2 = upd[1].split(':')
  let updDate = temp2[0] + ':' + temp2[1]
  let link = '/tasks/' + id;


  return (
    <div className={style.cardLots}>
      <Link to={link}>
        <img src={image} alt=''/>
      </Link>
      <h2>{title}</h2>
      <h3><span className={style.spanAdd}>категория&nbsp;&nbsp;|&nbsp;&nbsp;</span>{category}</h3>
      <div className={style.date}>
        <p>{cre[0]}&nbsp;&nbsp;{creDate}&nbsp;&nbsp;
          <span>(обновлено: {upd[0]}&nbsp;&nbsp;{updDate})</span>
        </p>
      </div>


    </div>
  )
}

export default Task
