import { Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

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
        <Suspense fallback="Loading...">
          <Account />
        </Suspense>
      </Header>
      <ul>
        <Link href="admin/posts">
          <a>
            posts
          </a>
        </Link>
      </ul>
    </>
  )
}

export default AdminPage