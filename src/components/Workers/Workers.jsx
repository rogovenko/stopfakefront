import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getAllUsers, searchUser } from '../../redux/actions/usersAc'


function Workers() {
  const workers = useSelector(store => store.users.reverse())
  const tasks = useSelector(store => store.tasks)
  const dispatch = useDispatch()
  let [input, setInput] = useState('')

  useEffect(() => {
    if (input == '') {
      dispatch(getAllUsers())
    }
    dispatch(searchUser(input))
  }, [input])


  return (


         <div className={style.bestSellers}>
              <div className={style.cardSellers}>
                  <img src='/img/ava1.png' alt=''/>
                  <h3>Слава К.</h3>
                  <p>Основные лоты на аукционах – nft изображения, звуковые дорожки для исполнителей</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava2.png' alt=''/>
                  <h3>КФХ “АгроФуд”</h3>
                  <p>Свежие продукты оптом и в розницу с доставкой по югу России</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava3.png' alt=''/>
                  <h3>Anonimus #0570</h3>
                  <p>Единственный в России сертифицированный поставщик таманской голубой глины</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava4.png' alt=''/>
                  <h3>Tesla, Inc.</h3>
                  <p>An American electric vehicle and clean energy company based in Palo Alto, California</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>
            </div>


        /* {workers.map((el) => {
          return <div id={el.id} className={style.currentWorker}>
            <div className={style.imgContainer}>
              <img className={style.img} src={el.avatar} alt="" />
            </div>
            <div className={style.ratingContainer}>
              <Link to={`/workers/${el.id}`} className={style.currentName}><div>{el.name}</div></Link>
              <div className={style.ratingsContainer}>
                <div className={style.currentRating}>Рейтинг: {Math.floor(Math.random() * (5 - 1) + 1)}/5</div>
                <div className={style.currentRew}>Отзывов : {Math.floor(Math.random() * (50 - 0) + 0)}</div>
              </div>
            </div>
            <div className={style.infoWorkerContainer}>
              <div className={style.doneContainer}>
                <div className={style.done}>Решенных задач: {tasks.filter(task => el.id === task.worker && task.isDone === true).length} </div>
              </div>
            </div>
          </div>
        })} */





    

  )
}

export default Workers
