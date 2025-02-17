import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const [showPass, setShowPass] = useState(false)


  const {values, handleChange} = useForm({
    user:"",
    password:""
  })

  const {
    user,
    password
  } = values;

  const dispatch=useAppDispatch();
  const navigate=useNavigate();

  const handleSubmitForm= async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response=await fetch("/user.json");
    const usersData=await response.json();
    const userFound=usersData.users.find((u: {username:string; password:string}) => u.username===user && u.password===password);
    if (userFound){
      dispatch(setLogin(user));
      navigate("/");
    }else{
      alert('Usuario o contraseña no encontrado')
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        <span
          style={{ fontSize: "15vh" }}
          className="material-symbols-outlined">
          account_circle
        </span>
        <Form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
              type="text"
              name="user"
              value={user}
              onChange={handleChange}
              placeholder="Ingrese su usuario aquí"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control value={password} onChange={handleChange} type={showPass ? "text" : "password" } name="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Mostrar contraseña"
              id="showPass"
              onChange={() => {
                setShowPass(!showPass);
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center mt-2">
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
