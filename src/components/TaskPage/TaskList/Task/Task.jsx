import React from 'react'
import style from './style.module.css'
import { Link, useParams } from 'react-router-dom'


function Task({ id, title, category, description, image, deadline, createdAt }) {


  return (
    <div className={style.cardLots}>


      <img src={image} alt=''/>
      <h2>{title}</h2>
      <h3>прямой аукцион&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Алексей М.</h3>
      <p>{description}</p>

      <div>
        <p>Срок торгов:&nbsp;&nbsp;
          <span className={style.spanAdd}>19/02/2022 18:00</span>
        </p>
        <p>Последняя ставка:&nbsp;&nbsp;
          <span className={style.spanAdd}>2 000 $</span>
        </p>
      </div>

      <div className={style.btnGroup2}>
      <Link className={style.linkOff} to={`/tasks/${id}`}>
        <button type="button" className={style.join2}>
            <span className={style.btnText}>Сделать ставку</span>
        </button>
      </Link>

        <button type="button" className={style.enter2}>
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
      </div>

    </div>
  )
}

export default Task
