
import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { allTasks, filteredTask } from '../../../../redux/actions/tasksAc'
import { useRef } from 'react'
import CurrentCategory from './CurrentCategory/CurrentCategory'

function Category() {

  const [categories, setCategories] = useState([
    { title: 'Антиквариат' },
    { title: 'Искусство' },
    { title: 'Букинистика' },
    { title: 'Винтаж' },
    { title: 'Мода' },
    { title: 'Техника' },
    { title: 'Другое' },
  ])

  const cancelButton = useRef()

  const [filtered, setFiltered] = useState(false)
  const dispatch = useDispatch()

  const cancelFilter = (e) => {
    dispatch(allTasks())
    setFiltered(!filtered)
  }




  return (
    <>
      <div className={style.categorySeparator}></div>
      <h2 className={style.categoryHeader}>Выберите категорию</h2>
      <div className={style.categoryContainer}>
        {categories.map((el) => {
          return <CurrentCategory filtered={filtered} setFiltered={setFiltered} cancelButton={cancelButton} {...el} />
        })}
      </div>
      {filtered &&

        <button onClick={cancelFilter} ref={cancelButton} className={style.cancelFilter}>Отменить все фильтры</button>
      }
    </>
  )
}

export default Category
