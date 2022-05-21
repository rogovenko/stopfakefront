import React from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function CurrentWorker() {
  const { id } = useParams()
  const tasks = useSelector(store => store.tasks)
  const user = useSelector(store => store.users)
    .find(el => el.id === +id)

  return (
    <div>
      <img className={style.img} src='/img/worker.png'/>
      <img className={style.img} src='/img/товары без ф.png'/>
      
    </div>
  )
}

export default CurrentWorker
