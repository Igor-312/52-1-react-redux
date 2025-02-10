import { BrowserRouter, Routes, Route } from "react-router-dom"

import GlobalStyles from "./styles/GlobalStyles"

//lessons
import Lesson17 from "lessons/Lesson17/Lesson17"
import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

//homeworks
import Homework17 from "homeworks/Homework17/Homework17"

//consultations

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/homework17" element={<Homework17 />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
