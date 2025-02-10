import Input from "../../../components/Input/Input"
import Button from "../../../components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useFormik } from "formik"
import { UserFormNames } from "./types"
import { v4 } from 'uuid';
import { useAppDispatch } from "store/hooks"
import { usersActions } from "store/redux/user/userSlice"

function Home() {

  //В данном месте была найдена ошибка (отсутствовал вызов хука useDispatch)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      userName: '',
      age: '',
      jobTitle: '',
    } as UserFormNames,
    onSubmit: (values) => {
      dispatch(usersActions.addUser({ ...values, id: v4() }))
    }
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name='userName'
          placeholder="Enter fullname"
          value={formik.values.userName}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home