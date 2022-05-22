import React from 'react'
import style from './style.module.css'
import TaskList from './TaskList/TaskList'


function TaskPage() {
  return (
    <div className={style.homeContainer}>
      <TaskList />
    </div>
  )
}

export default TaskPage
