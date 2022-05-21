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

            <div className={style.slider}>
              <div className={style.sliderCard}>
                <h1>«Автопортрет»</h1>
                <h3>онлайн-торги&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Museum Orse</h3>
                <p>Последний автопортрет Ван Гога, был создан незадолго до того, как он покинул Сен-Реми-де-Прованс (Франция) на юге страны.</p>
                <h2>Стоимость:&nbsp;&nbsp; 1 000 000 $</h2>

                <div className={style.btnGroup}>
                  <button type="button" className={style.join}>
                      <span className={style.btnText}>Записаться на аукцион</span>
                  </button>

                  <button type="button" className={style.enter}>
                      <span className={style.btnIcon}>
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.0469 3.51541C27.9812 -7.90046 36.9184 16.2607 14.0469 23.5C-8.82462 16.2607 0.112541 -7.90046 14.0469 3.51541Z" fill="url(#paint0_linear_37_1731)"/>
                          <defs>
                          <linearGradient id="paint0_linear_37_1731" x1="2.67987" y1="1.62847" x2="21.1021" y2="22.5803" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#58DC5D"/>
                          <stop offset="1" stop-color="#04CE9B"/>
                          </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className={style.btnText2}>Отслеживать</span>
                  </button>
                </div>
              </div>

              <img className={style.imgSlider} src='/img/slider1.png' alt=''/>
              <div className={style.thumbs}>
                <img src='/img/thumb3.png' alt=''/>
                <img src='/img/thumb1.png' alt=''/>
                <img src='/img/thumb2.png' alt=''/>
                <img src='/img/thumb3.png' alt=''/>
                <img src='/img/thumb4.png' alt=''/>
                <img src='/img/thumb3.png' alt=''/>
              </div>
            </div>
            
            <h1 className={style.interHeader}>Топ-продавцы</h1>

            <div className={style.bestSellers}>
              <div className={style.cardSellers}>
                  <img src='/img/ava1.png' alt=''/>
                  <h3>Слава К.</h3>
                  <p>Основные лоты на аукционах – nft изображения, звуковые дорожки для исполнителей</p>
                  <Link className={style.textLink} to='/workers/1'>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
                  </Link>
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

            <div className={style.howContainer}>
              <h1>Как это работает</h1>
              <div className={style.howPic}>
                <div className={style.howPic1}>
                  <img src='/img/how1.png' />
                  <h3>С чего начать</h3>
                </div>
                <div className={style.howPic2}>
                  <img src='/img/how3.png' />
                  <h3>Виды аукционов</h3>
                </div>
              </div>
            </div>



            <div className={style.interHeader}>
              <h1 >Популярные лоты</h1>
              <div>
              <button type="button" className={style.enter0}>
                      <Link className={style.btnText0} to='/tasks'>
                        <span>Смотреть все</span>                    
                      </Link>
                  </button>
              </div>
            </div>

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
