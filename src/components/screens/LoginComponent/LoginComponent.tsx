import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";

export const LoginComponent = () => {
  const [showPass, setShowPass] = useState(false)

  const handleSubmitForm= (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

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
              placeholder="Ingrese su usuario aquí"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type={showPass ? "text" : "password" } name="password" />
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
