import { Route, Routes } from "react-router-dom"
import { LoginComponent } from "../components/screens/LoginComponent/LoginComponent"
import { Home } from "../components/screens/Home/Home"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginComponent/>}  />
        <Route path="/home" element={<Home/>} />
    </Routes>
  )
}
