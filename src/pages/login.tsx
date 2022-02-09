import { useQuery, useMutation } from 'urql'
import { withUrqlClient } from 'next-urql'
import { useState } from 'react'

const Login = () => {
const [state, setState] = useState({
  username: '',
  password: ''
})
const handleSubmit = (event) => {
  event.preventDefault()
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
  }
  fetch('http://localhost:5000/login/password', requestOptions)
    .then(response => response.json())
    .then(data => alert(data.message))
}
  return (
     <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              name="username"
              type="text"
              autoComplete="username" required 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{username: e.target.value}})}
            />
        </div>
        <div>
            <label htmlFor="current-password">Password</label>
            <input
              id="current-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{password: e.target.value}})}
            />
        </div>
        <div>
            <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:5000/graphql',
}))(Login)