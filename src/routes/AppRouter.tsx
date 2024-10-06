import { Navigate, Route, Routes } from "react-router-dom"
import { LoginComponent } from "../components/screens/LoginComponent/LoginComponent"
import { useAppSelector } from "../hooks/redux"
import { ProtectedRoutes } from "./ProtectedRoutes"


export const AppRouter = () => {

  const isLogged=useAppSelector(state=>state.auth.isLogged);
  return (
    <>
    <Routes>
      {isLogged ? <Route path="/*" element={<ProtectedRoutes/>}/>
      : <Route path="/*" element={<Navigate to={"/login"}/>}/>
      }
        <Route path="/login" element={<LoginComponent/>}/>
    </Routes>
    </>
  );
};
