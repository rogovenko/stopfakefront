import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.module.css'

function Footer() {
  const tasks = useSelector(store => store.tasks)

  return (
    <>
    <img src='/img/fakeFooter.png'/>
      {/* <div className={style.footerSeparator}></div>
      <div className={style.footer}>
        <div className={style.footerLogo}>
          <Link className={style.link} to={'/'}>Best Ipsum Bet (c)</Link>
        </div>
        <div className={style.footerStat}>
          Всего открытых лотов: {tasks.length}
        </div>
        <div className={style.social}>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div> */}
    </>
  )
}

export default Footer
