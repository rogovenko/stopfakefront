import React from 'react'
import style from './style.module.css'

import { useSelector } from 'react-redux'
import Task from '../TaskPage/TaskList/Task/Task'
import { Link } from 'react-router-dom'

function Greet() {
  const tasks = useSelector(store => store.tasks)
  return (
    <>
      {tasks && tasks.length > 0 &&
        <>
          <div className={style.greetContainer}>
              {tasks && (
                <div className={style.bestSellers}>
                  {tasks.map((el) => <Task key={el.id} {...el} />)}
                </div>
              )}

          </div>
        </>
      }
    </>
  )
}

export default Greet
