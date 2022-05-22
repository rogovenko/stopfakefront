import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route, useLocation } from "react-router-dom"
import Signin from "./components/Authentication/Signin/Signin"
import Header from "./components/Header/Header"
import Greet from "./components/Greet/Greet"
import style from "./App.module.css"
import { allTasks } from "./redux/actions/tasksAc"
import { allComments } from "./redux/actions/commentsAc"
import CurrentTask from "./components/TaskPage/TaskList/CurrentTask/CurrentTask"


const tele = window.Telegram.WebApp;

function App() {

  

  useEffect(() => {
    tele.ready();
  })
  
  function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTasks())
  }, [])

  useEffect(() => {
    dispatch(allComments())
  }, [])


  return (
    <div className={style.content}>
        <Header />
        {<Routes>          
          <Route path="/" element={<Greet />} />
          <Route path="signin" element={<Signin />} />
          <Route path="tasks/:id" element={<CurrentTask />} />
          <Route path="tasks" element={<TaskPage />} />
        </Routes>}
        {/* <Footer /> */}
    </div>
  )
}

export default App
