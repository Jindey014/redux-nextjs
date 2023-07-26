'use client'

import { useAppSelector } from '@/redux/store'
import Login from './login'

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isMod = useAppSelector((state) => state.authReducer.value.isMod)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
      <Login />

      <h1>Username: {username}</h1>
      {isMod && <h1>This User is a Moderator</h1>}
    </main>
  )
}
