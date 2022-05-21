import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  const navigate = useNavigate()
  return (
    <div className={style.headerContainer}>
      <div  className={style.logoGroup}>
        <img className={style.logo1} src='/img/logo.png' alt=''></img>
        <div className={style.logo2}>
          <Link to="/" className={style.logoText}>ИНДУСТРИЯ</Link>
          <h3 className={style.logoSub}>пространство для выгодных сделок</h3>
        </div>
      </div>

      <NavBar />

      <div>
        <button onClick={() => navigate('/create')} type="submit" className={style.enter4}>
            <span className={style.btnIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#64E408" class="bi bi-tag" viewBox="0 0 16 16">
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
              <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
            </svg>
            </span>
            <span className={style.btnText4}>создать лот</span>
        </button>
      </div>

      <div className={style.search}>
        <div>
            <svg className={style.search1} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 20.5C12.7187 20.4995 14.8735 19.7568 16.6213 18.39L22.1162 23.885L23.8838 22.1175L18.3888 16.6225C19.7563 14.8746 20.4995 12.7193 20.5 10.5C20.5 4.98625 16.0137 0.5 10.5 0.5C4.98625 0.5 0.5 4.98625 0.5 10.5C0.5 16.0137 4.98625 20.5 10.5 20.5ZM10.5 3C14.6363 3 18 6.36375 18 10.5C18 14.6363 14.6363 18 10.5 18C6.36375 18 3 14.6363 3 10.5C3 6.36375 6.36375 3 10.5 3Z" fill="#555555"/>
            </svg>
          <input className={style.search2} type="text" placeholder="Искать ..." aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
      </div>

      <div>
      <img className={style.extra} src='/img/headerextras.png' alt='ss'></img>
      </div>
    
      <Link to='/profile'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2342 14.4013C11.0642 14.5512 10.9701 14.752 10.9722 14.9605C10.9743 15.169 11.0725 15.3684 11.2455 15.5158C11.4186 15.6632 11.6527 15.7468 11.8974 15.7486C12.1421 15.7504 12.3779 15.6703 12.5539 15.5255L17.5323 11.2687C17.5758 11.2318 17.6102 11.1879 17.6338 11.1396C17.6573 11.0913 17.6694 11.0396 17.6694 10.9873C17.6694 10.935 17.6573 10.8832 17.6338 10.8349C17.6102 10.7866 17.5758 10.7427 17.5323 10.7058L12.5539 6.45064C12.3779 6.30582 12.1421 6.22568 11.8974 6.22749C11.6527 6.2293 11.4186 6.31292 11.2455 6.46033C11.0725 6.60774 10.9743 6.80715 10.9722 7.01561C10.9701 7.22408 11.0642 7.42491 11.2342 7.57486L14.3067 10.2049H1.80003C1.5525 10.2049 1.3151 10.2887 1.14007 10.4378C0.965032 10.5869 0.866699 10.7891 0.866699 11C0.866699 11.2109 0.965032 11.4131 1.14007 11.5622C1.3151 11.7113 1.5525 11.795 1.80003 11.795H14.3067L11.2342 14.4013ZM21.4 0.664185H9.2667C9.01916 0.664185 8.78177 0.74795 8.60673 0.897053C8.4317 1.04616 8.33337 1.24838 8.33337 1.45925C8.33337 1.67011 8.4317 1.87234 8.60673 2.02144C8.78177 2.17054 9.01916 2.25431 9.2667 2.25431H20.4667C20.7142 2.25431 20.9516 2.33807 21.1267 2.48718C21.3017 2.63628 21.4 2.83851 21.4 3.04937V18.9506C21.4 19.1615 21.3017 19.3637 21.1267 19.5128C20.9516 19.6619 20.7142 19.7457 20.4667 19.7457H8.80003C8.5525 19.7457 8.3151 19.8294 8.14007 19.9785C7.96503 20.1276 7.8667 20.3299 7.8667 20.5407C7.8667 20.7516 7.96503 20.9538 8.14007 21.1029C8.3151 21.252 8.5525 21.3358 8.80003 21.3358H21.4C21.8951 21.3358 22.3699 21.1683 22.72 20.8701C23.07 20.5718 23.2667 20.1674 23.2667 19.7457V2.25431C23.2667 1.83258 23.07 1.42813 22.72 1.12992C22.3699 0.831715 21.8951 0.664185 21.4 0.664185Z" fill="white"/>
                </svg>
              </span>
              <span className={style.btnText}>Войти</span>
          </button>
        </div>
      </Link>
      
    </div>
  )
}

export default Header
