import { useQuery, useMutation } from 'urql'
import { withUrqlClient } from 'next-urql'
import { useState, useEffect } from 'react'
import Router from 'next/router'

const User = () => {
  const [result, refetch] = useQuery({
    query: `#graphql
      {
        currentUser {
          id
          email
          firstName
          lastName
        }
      }
    `
  })
  const [logoutResult, logout] = useMutation(`#graphql
    mutation {
      logout
    }
  `)

  const handleLogout = () => {
    logout()
      .then(result => {
        if (result.error) throw result.error
        if (result.data?.logout) Router.push('/login')
      })
  }
  return (
    <div>
        userPage
      <ul>
        <li>{result.data?.currentUser.id}</li>
        <li>{result.data?.currentUser.email}</li>
        <li>{result.data?.currentUser.firstName}</li>
        <li>{result.data?.currentUser.lastName}</li>
      </ul>
      <div>
        {result.error?.message}
      </div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: '/api/graphql',
}))(User)