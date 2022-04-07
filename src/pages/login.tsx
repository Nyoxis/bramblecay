import { useState } from 'react'
import Router from 'next/router'

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    const requestOptions: RequestInit = {
      method: 'POST',
      redirect: 'follow',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    }
    fetch('/api/login', requestOptions)
      .then(response => {
        if (!response.ok) return Promise.reject(response)
        Router.push('/user')
      })
      .catch((err) => {
        err.json()
          .then(jsonerr => console.log(jsonerr))
      })
  }
  return (
     <>
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
    </>
  )
}

export default Login