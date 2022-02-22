import { useQuery, useMutation } from 'urql'
import { withUrqlClient } from 'next-urql'
import { useState } from 'react'

enum Kind {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}

const Index = () => {
  const [result, refetch] = useQuery({
    query: `#graphql
      {
        users { id email firstName lastName kind }
      }
    `
  })
  //$id: String, $email: String!, $age: Int!, $kind: UserKind!
  //{id: $id, email: $email, age: $age, kind: $kind}
  const [updateResult, update] = useMutation(
    `#graphql
      mutation ($data: UserCreateInput!) {
        createUser (data: $data) {
          id
        }
      }
    `
  )
  const [state, setState] = useState({
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    kind: Kind.NORMAL
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
    update({data: state})
    refetch()
  }

  return (
    <div>
      <div>Welcome to Next.js!</div>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type="text"
            name="id"
            value={state.id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{id: e.target.value}})}
          />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{email: e.target.value}})}
          />
        </label>
        <label>
          firstName:
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{firstName: e.target.value}})}
          />
        </label>
        <label>
          lastName:
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{lastName: e.target.value}})}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{password: e.target.value}})}
          />
        </label>
        <div>
          <input
            type="radio"
            checked={state.kind===Kind.NORMAL}
            id="NormalKind"
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: Kind.NORMAL}})}
          />
          <label htmlFor="NormalKind">normal</label>
          <input
            type="radio"
            checked={state.kind===Kind.ADMIN}
            id="AdminKind"
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: Kind.ADMIN}})}
          />
          <label htmlFor="AdminKind">admin</label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
      <div>
        updateError: {updateResult.error?.message}
        fetchError: {result.error?.message}
      </div>
      <div>{
        result.data?.users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.id} {user.email}</p>
            </div>
          )
        })
      }</div>
    </div>
  )
}
export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: '/api/graphql',
}))(Index)