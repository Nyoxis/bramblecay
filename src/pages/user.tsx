import { Suspense } from 'react'
import Router from 'next/router'
import { useQuery, useMutation } from '../gqless'

const UserData = () => {
  const query = useQuery({
    prepare({ prepass, query }) {
      prepass(query.currentUser, 'id', 'email', 'firstName', 'lastName')
    }
  })

  return (
    <ul>
      <li>{query.currentUser.id}</li>
      <li>{query.currentUser.email}</li>
      <li>{query.currentUser.firstName}</li>
      <li>{query.currentUser.lastName}</li>
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
  
  return (
    <>
      userPage
      <Suspense fallback="Loading...">
        <UserData/>
      </Suspense>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default User