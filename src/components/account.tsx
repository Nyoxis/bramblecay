import {useRouter} from 'next/router'
import { Suspense } from 'react';
import { useTransactionQuery, useMutation } from '../gqty'

const AccountData = () => {
  const router = useRouter()
  const { data, error, isLoading } = useTransactionQuery(
    (query, args: string) => {
      return query.currentUser
    },
    {
      variables: 'firstName',
      // By default is 'cache-first'
      fetchPolicy: 'network-only',
      // Polling every 5 seconds
      // By default is `true`
      notifyOnNetworkStatusChange: false,
      onCompleted(data) {if (data === null) router.push('/login')},
      onError(error) {},
      suspense: true,
      // By default is `false`
      skip: false,
    }
  )
  if (error) {
    return <p>Error! {error.message}</p>;
  }
  return (
    <>
      <img></img>
      <div>{data.firstName}</div>
    </>
  )
}

const Account = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <AccountData />
      </Suspense>
    </div>
  )
}

export default Account