import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  const navigate = useNavigate()
  return (
    <>
      <div className={style.headerContainer}>
          <div className={style.logo2}>
            <Link to="/" className={style.logoText}><img alt='logo' src='/img/logo.svg'></img></Link>
        </div>
      
        <Link to='/signin'>
          <div>
            <button type="button" className={style.enter}>
                <span className={style.btnIcon}>
                <svg width="18" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.20386H18" stroke="#555555" stroke-width="2"/>
                  <path d="M0 7.72937H18" stroke="#555555" stroke-width="2"/>
                  <path d="M0 14.2549H18" stroke="#555555" stroke-width="2"/>
                </svg>
                </span>
                <span className={style.btnText}>Меню</span>
            </button>
          </div>
        </Link>
        
      </div>
      <div>
      <Link to='/'>
          <button type="button" className={style.enter2}>
              <span className={style.btnText}>Последние новости</span>
          </button>
      </Link>
      <Link to='/'>
          <button type="button" className={style.enter2}>
              <span className={style.btnText}>Рейтинг СМИ</span>
          </button>
      </Link>
      <Link to='/'>
          <button type="button" className={style.enter2}>
              <span className={style.btnText}>Последние обновления</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 9" fill="none">
                <circle cx="4.5" cy="4.5" r="4.5" fill="#E61535"/>
              </svg>
          </button>
      </Link>
      </div>
    
    </>
  )
}

export default Header
