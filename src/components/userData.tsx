import { useQuery } from '../gqty'

const UserData = () => {
  const query = useQuery()
  
  if(!query.currentUser)return<div>not loaded</div>
  return (
    <ul>
      <li>{query.currentUser.id}</li>
      <li>{query.currentUser.email}</li>
      <li>{query.currentUser.password}</li>
    </ul>
  )
}

export default UserData