import { useQuery, useMutation } from 'urql'
import { withUrqlClient } from 'next-urql'
import { useState } from 'react'

const User = () => {
  const [result, refetch] = useQuery({
    query: `#graphql
      {
        currentUser
      }
    `
  })
  return (
    <div>
        loginPage
      <div>
        {result.data?.currentUser}
      </div>
      <div>
        {result.error?.message}
      </div>
    </div>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:5000/graphql',
}))(User)