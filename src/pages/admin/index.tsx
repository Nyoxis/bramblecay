import { Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import React from 'react'

import Header from '../../components/header'
const Account = dynamic(
  () => import('../../components/account'),
  {
    //currently not supported with noSSR
    //suspense: true,
    ssr: false,
  }
)
const AdminPage = () => {
  return (
    <>
      <Header heading="Admin Page">
        <Account />
      </Header>
      <ul>
        <Link href="admin/posts">
          posts
        </Link>
      </ul>
    </>
  )
}

export default AdminPage