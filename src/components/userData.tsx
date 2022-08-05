import { useQuery } from '../gqty'

const UserData = () => {
  const query = useQuery()
  
  return (
    <ul>
      <li>{query.currentUser.id}</li>
      <li>{query.currentUser.email}</li>
      <li>{query.currentUser.password}</li>
    </ul>
  )
}

export default UserData