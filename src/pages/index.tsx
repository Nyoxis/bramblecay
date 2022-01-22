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
        users { id email age kind }
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
    age: 0,
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
          name:
          <input
            type="text"
            name="name"
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
          age:
          <input
            type="number"
            step="1"
            name="age"
            value={state.age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{age: parseInt(e.target.value)}})}
          />
        </label>
        <div>
          <input
            type="radio"
            checked={state.kind===Kind.NORMAL}
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: Kind.NORMAL}})}
          />
          <label>normal</label>
          <input
            type="radio"
            checked={state.kind===Kind.ADMIN}
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: Kind.ADMIN}})}
          />
          <label>admin</label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
      <div>
        error: {updateResult.error?.message}
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
  url: 'http://localhost:5000/graphql',
}))(Index)