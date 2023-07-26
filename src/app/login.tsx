'use client'

import { useState } from 'react'
import { logIn, logOut, toggleModerator } from '@/redux/features/authSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'

export default function Login() {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

  const onClickLogin = () => {
    dispatch(logIn(username))
  }
  const onClickLogout = () => {
    dispatch(logOut())
  }
  const onClickToggle = () => {
    dispatch(toggleModerator())
  }

  return (
    <div className="bg-slate-300">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border"
      />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Logout</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  )
}
