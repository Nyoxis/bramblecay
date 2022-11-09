import dynamic from 'next/dynamic'
import Router from 'next/router'
import React, { Suspense } from 'react'
import { useMutation } from '../gqty'

const UserData = dynamic(
  () => import('../components/userData'),
  {
    // currently not working with noSSR
    //suspense: true,
    ssr: false,
  }
)

const User = () => {
  const [logout] = useMutation(
    (mutation) => {
      const result = mutation.logout
      return result
    }
  )
  
  const handleLogout = async (e) => {
    e.preventDefault
    const result = await logout()
    if (result) Router.push('/login')
  }
  
  return (
    <>
      userPage
      {
        <Suspense fallback={`Loading...`}>
          <UserData />
        </Suspense>
      }
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default User