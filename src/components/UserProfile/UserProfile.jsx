import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import style from './style.module.css'
import TaskUser from './TaskUser/TaskUser'

const UserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // // пользователь который зарегестрирован/авторизирован
  const user = useSelector((state) => state.user)
  useEffect(() => { }, [])


  return (
    <div>
      <img className={style.img} src='/img/Лк продавца.png'/>
      <img className={style.img} src='/img/мои товары.png'/>
      <img className={style.img} src='/img/баланс.png'/>
  </div>
  )
}

export default UserProfile
