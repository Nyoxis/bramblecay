import {useRouter} from 'next/router'
import { useQuery, useMutation } from '../gqless'

const Account = () => {
  const router = useRouter()
  const query = useQuery()
  console.log(query.currentUser)
  if (query.currentUser === undefined && !query.$state.isLoading) {
    router.push('/login')
  }
  return (
    <div>
      <img></img>
      <div>{query.currentUser.firstName}</div>
    </div>
  )
}

export default Account