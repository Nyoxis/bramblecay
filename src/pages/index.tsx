import { useState, Suspense } from 'react'
import { useQuery, query, useMutation, UserCreateInput, UserKind } from '../gqless'

const UserList = () => {
  const query = useQuery({
    prepare({ prepass, query }) {
      prepass(query.users, 'id', 'email', 'kind')
    }
  })
  const [deleteUser] = useMutation(
    (mutation, id: string) => {
      const user = mutation.deleteUser({ where: { id } })
      return user.id
    }, {
      refetchQueries: [query.users()]
    }
  )
  return (
    <div>
      {
        query.users().map(user => {
          console.log(user.id)
          return (
            <div key={user.id}>
              <p>{user.id} {user.email} {user.kind}</p>
              <button onMouseDown={e => {e.preventDefault; deleteUser({ args: user.id })}}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

const Index = () => {
  const [update] = useMutation(
    (mutation, data: UserCreateInput) => {
      const user = mutation.createUser({ data })
      if (user) {
        return user.id
      }
    }, {
      refetchQueries: [query.users()]
    }
  )
  //$id: String, $email: String!, $age: Int!, $kind: UserKind!
  //{id: $id, email: $email, age: $age, kind: $kind}
  //const [updateResult, update] = useMutation({ suspense: false })
  const [state, setState] = useState<UserCreateInput>({
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    kind: UserKind.NORMAL
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    update({ args: state })
  }

  return (
    <>
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
            checked={state.kind===UserKind.NORMAL}
            id="NormalKind"
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: UserKind.NORMAL}})}
          />
          <label htmlFor="NormalKind">normal</label>
          <input
            type="radio"
            checked={state.kind===UserKind.ADMIN}
            id="AdminKind"
            name="kind"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: UserKind.ADMIN}})}
          />
          <label htmlFor="AdminKind">admin</label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
      <Suspense fallback="Loading...">
        <UserList/>
      </Suspense>
    </>
  )
}
export default Index