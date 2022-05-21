import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTaskThunk } from '../../../redux/actions/tasksAc'

function CreateTask () {

  const [task, setTask] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const taskHandler = (e) => {
    e.preventDefault()
    dispatch(addTaskThunk(task))
    navigate('/tasks')
  }
 
  return (
    <div className={style.mainContainer}>
      <form className={style.taskContainer} onSubmit={(e) => taskHandler(e)}>
        <label className={style.label}>НАЗВАНИЕ</label>
        <input 
          className={style.input}
          type='text'
          name='title'
          value={task.name}
          onChange={inputChange}
        />
        <label className={style.label}>ОПИСАНИЕ</label>
        <textarea 
          className={style.input}
          type='text'
          name='description'
          value={task.description}
          onChange={inputChange}
        ></textarea>
        <label className={style.label}>КАТЕГОРИЯ</label>
        <select className={style.input} value={task.category} name='category' onChange={inputChange}>
          <option disabled value='Выбирите категорию'>Выбирите категорию</option>
          <option selected value="Антиквариат">Антиквариат</option>
          <option value="Искусство">Искусство</option>
          <option value="Предметы роскоши">Предметы роскоши</option>
          <option value="Техника">Техника</option>
          <option value="Другое">Другое!</option>
        </select>
        <label className={style.label}>СРОКИ</label>
        <input 
          type="date"
          className={style.input}
          name='deadline'
          value={task.deadline}
          onChange={inputChange}
        />
        <br/>
        <button className={style.btn} type="submit">ОПУБЛИКОВАТЬ</button>
      </form>
      <img src='/img/how1.png'></img>
    </div>
  )
}

export default CreateTask
