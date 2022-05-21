import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { allMsg } from "../../redux/actions/msgAc"
import { upTaskThunk } from "../../redux/actions/tasksAc"
import style from "./style.module.css"


const Chat = ({ task }) => {

  const user = useSelector((state) => state.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMatch = () => {
    dispatch(upTaskThunk(task.id, 0))
    navigate("/tasks/" + task.id)
  }
  return (
    <>
    
    <div>
      {user && user.role === 2 && (
        <button type="button" onClick={handleMatch} className={style.btn}>
          СОВЕРШИТЬ СДЕЛКУ
        </button>
      )}
    </div>
    </>
  )
}

export default Chat
