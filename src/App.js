import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, useLocation } from "react-router-dom"
import Signin from "./components/Authentication/Signin/Signin"
import Signup from "./components/Authentication/Signup/Signup"
import Signout from "./components/Authentication/Signout/Signout"
import { checkUser, delUser } from "./redux/actions/userAction"
import Header from "./components/Header/Header"
import Greet from "./components/Greet/Greet"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import CreateTask from "./components/TaskPage/CrateTask/CreateTask"
import { allTasks } from "./redux/actions/tasksAc"
import { getAllUsers } from "./redux/actions/usersAc"
import UserProfile from "./components/UserProfile/UserProfile"
import EditUserProfile from "./components/UserProfile/EditUserProfile"
import { allComments } from "./redux/actions/commentsAc"
import { allFeedbacks } from "./redux/actions/feedbacksAc"
import CurrentTask from "./components/TaskPage/TaskList/CurrentTask/CurrentTask"
import Workers from "./components/Workers/Workers"
import { allMsg } from "./redux/actions/msgAc"
import CurrentWorker from "./components/Workers/CurrentWorker/CurrentWorker"

const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  })
  
  const onCheckout = () => {
    tele.MainButton.text = "Pay :)"
    tele.MainButton.show();
  }

  function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop()
  
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(checkUser())
  }, [])

  useEffect(() => {
    dispatch(allTasks())
  }, [])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    dispatch(allComments())
  }, [])

  useEffect(() => {
    dispatch(allFeedbacks())
  }, [])

  // useEffect(() => {
  //   dispatch(allMsg())
  // }, [])

  return (
    <div className={style.content}>
        <Header />
        <Routes>          
          <Route path="/" element={<Greet />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="tasks/:id" element={<CurrentTask />} />
          {user ? (
            <Route path="signout" element={<Signout />} />
          ) : (
            <Route path="signin" element={<Signin />} /> && <Route path="signup" element={<Signup />} />
          )}
          <Route path="workers" element={<Workers />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path='workers/:id' element={<CurrentWorker />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
