import React, { useState, Suspense } from 'react'
import {
  useQuery,
  query,
  useMutation,
  UserCreateInput,
  UserKind,
  prepareReactRender,
  useHydrateCache,
} from '../gqty'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqty/react'

const UserList = ({ cacheSnapshot }: PropsWithServerCache) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  })
  const query = useQuery()

  const [deleteUser] = useMutation(
    (mutation, id: string) => {
      const user = mutation.deleteUser({ where: { id } })
      return user.id
    }, {
      refetchQueries: [query.users()],
      awaitRefetchQueries: true,
    }
  )

  return (
    <div className={'space-y-sm p-sm'}>
      {
        query.users().map(user => {
          return (
            <div key={user.id}>
              <p className={'text-teal-900 text-xl py-sm'}>{user.id} {user.email} {user.kind}</p>
              <button onMouseDown={e => {e.preventDefault; deleteUser({ args: user.id })}}>
                delete
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

const NewUserForm = () => {
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
  
  const [state, setState] = useState<UserCreateInput>({
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    kind: UserKind.NORMAL,
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    update({ args: state })
  }

  return (
    <form onSubmit={handleSubmit} className={'space-y-sm'}>
      <div>
        <label htmlFor='id'>
          id:
        </label>
        <input
          type='text'
          id='id'
          name='id'
          value={state.id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{id: e.target.value}})}
        />
      </div>
      <div>
        <label htmlFor='email'>
          email:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={state.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{email: e.target.value}})}
        />
      </div>
      <div>
        <label htmlFor='firstName'>
          firstName:
        </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={state.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{firstName: e.target.value}})}
        />
      </div>
      <div>
        <label htmlFor='lastName'>
          lastName:
        </label>
        <input
          type='text'
          id='lastname'
          name='lastName'
          value={state.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{lastName: e.target.value}})}
        />
      </div>
      <div>
        <label htmlFor='password'>
          password:
        </label>
        <input
          type='password'
          name='password'
          value={state.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{password: e.target.value}})}
        />
      </div>
      <div>
        <input
          type='radio'
          checked={state.kind===UserKind.NORMAL}
          id='NormalKind'
          name='kind'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: UserKind.NORMAL}})}
        />
        <label htmlFor='NormalKind'>normal</label>
        <input
          type='radio'
          checked={state.kind===UserKind.ADMIN}
          id='AdminKind'
          name='kind'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, ...{kind: UserKind.ADMIN}})}
        />
        <label htmlFor='AdminKind'>admin</label>
      </div>
      <input type='submit' value='Отправить'/>
    </form>
  )
}

const Test = ({ cacheSnapshot }: PropsWithServerCache) => {
  
  return (
    <>
      <div>Welcome to Next.js!</div>
      <NewUserForm />
      <Suspense fallback='Loading...'>
        <UserList cacheSnapshot={cacheSnapshot}/>
      </Suspense>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { cacheSnapshot } = await prepareReactRender(
    <Test />
  )
  return {
    props: {
      cacheSnapshot
    }
  }
}
export default Test