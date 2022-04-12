import { Suspense, useEffect } from 'react'
import Router from 'next/router'
import { useQuery, useMutation } from '../gqless'

const UserData = () => {
  const query = useQuery()
  return (
    <ul>
      <li>{query.currentUser.id}</li>
      <li>{query.currentUser.email}</li>
      <li>{query.currentUser.password}</li>
    </ul>
  )
}

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
  const SSR = typeof window === 'undefined'
  console.log(!SSR)
  return (
    <>
      userPage
      <Suspense fallback="Loading...">
        {!SSR && <UserData/>}
      </Suspense>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default User