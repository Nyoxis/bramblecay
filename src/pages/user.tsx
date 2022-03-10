import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useQuery, useMutation } from '../gqless'

const User = () => {
  const query = useQuery()
  const user = query.currentUser
  const handleLogout = () => {
  }
  return (
    <div>
        userPage
      <ul>
        <li>{user.id}</li>
        <li>{user.email}</li>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
      </ul>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default User