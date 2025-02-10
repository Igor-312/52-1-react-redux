import { useAppSelector } from "store/hooks"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { usersSelectors } from "store/redux/user/userSlice"

function Users() {
  const usersData = useAppSelector(usersSelectors.users)

  const users = usersData.map((user) => {
    return (
    <UserCard key={user.id}>
      <Paragraph>Name: {user.userName}</Paragraph>
      <Paragraph>Age: {user.age}</Paragraph>
      <Paragraph>Job Title: {user.jobTitle}</Paragraph>
    </UserCard>
  )
  })

  return (
  <UsersPageWrapper>
    {users}
  </UsersPageWrapper>
  )
}

export default Users