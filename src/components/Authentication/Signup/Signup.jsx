import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { addUser, checkUser } from '../../../redux/actions/userAction'
import axios from 'axios'

// зарегистрироваться
const Signup = () => {
  const [file, setFile] = useState('')
  const [data, getFile] = useState({ name: "", path: "" });
  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
  }

  const [reg, setReg] = useState({}) // состояние регистрации
  const navigate = useNavigate()
  const dispatch = useDispatch() // чтоб изменить состояние внутри компонента получаем диспатч
  const user = useSelector((state) => state.user) // получаем состояние

  // если пользователь прошел регистрацию то мы его направляем на его на главную страницу
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const inputChange = (e) => {
    setReg((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [select, setSelect] = useState('')

  const regHandler = (e) => {
    e.preventDefault()
    const avatar = file.name
    const fileData = new FormData();
    fileData.append('file', file);
    axios.post('http://localhost:3001/upload', fileData)
    dispatch(addUser({
      ...reg,
      role: select,
      avatar: avatar
    }))
    dispatch(checkUser())
    navigate('/')
  }
  return (
    <div className={style.signupContainer}>
      <form className={style.form} onSubmit={(e) => regHandler(e)}>
        <div className={style.container}>
          <label className={style.label}>Имя</label>
          <input
            type="text"
            name="name"
            value={reg.name}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Адрес электронной почты</label>
          <input
            type="email"
            name="email"
            value={reg.email}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Расскажите о себе</label>
          <input
            type="resume"
            name="resume"
            value={reg.resume}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Роль</label>
          <select
            type="role"
            name="role"
            onChange={inputChange}
            //onChange={(e) => setSelect(e.target.value)}
            value={select}
            className={style.select}
          >
            <option
              value="2"
              className={style.option}
            >
              Продавец
            </option>
            <option
              value="3"
              className={style.option}
            >
              Покупатель
            </option>
          </select>
        </div>
        <div className={style.container}>
          <label className={style.label}> Пароль</label>
          <input
            type="password"
            name="password"
            value={reg.password}
            onChange={inputChange}
            className={style.input}
          />
          <label className={style.label}> Загрузите аватарку</label>
          <div className={style.container}>
            <div className={style.fileupload}>
                <input className={style.any} type="file" ref={el} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <button className={style.button} type="submit">
            Поехали
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
