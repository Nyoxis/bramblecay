import { useRouter } from 'next/router'
import { Suspense, useState } from 'react';
import { useTransactionQuery, useMutation } from '../gqty'

const AccountData = () => {
  const router = useRouter()
  const { data, error, isLoading } = useTransactionQuery(
    (query) => {
      return query.currentUser.firstName
    },
    {
      // By default is 'cache-first'
      fetchPolicy: 'network-only',
      // By default is `true`
      notifyOnNetworkStatusChange: false,
      onCompleted(data) {},
      onError(error) {if (error.message.startsWith('Access denied!')) router.push('./login') },
      suspense: true,
      // By default is `false`
      skip: false,
    }
  )
  if (error) {
    return <p>Error! {JSON.stringify(error.graphQLErrors)}</p>;
  }
  return (
    <>
      <img></img>
      <div>{data}</div>
    </>
  )
}

const Account = () => {
  return (
    <div>
      <AccountData />
    </div>
  )
}

export default Account