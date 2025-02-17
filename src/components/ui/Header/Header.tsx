import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogOut } from "../../../redux/slices/auth";

export const Header = () => {
  const dispatch=useAppDispatch();
    const handleLogout = () => {
        dispatch(setLogOut());
    }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to={"/home"} className="nav-link">
          Inicio</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to={"/search"} className="nav-link">
                Buscar Héroe
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/dcHeroes"} className="nav-link">
                Héroes de DC
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/marvelHeroes"} className="nav-link">
                Héroes de Marvel
              </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text>Ingresado como: Admin</Navbar.Text>
            <Nav.Item>
                <div className="d-flex justify-content-center align-items-center" onClick={handleLogout}>
                <span style={{color:"white",  cursor:"pointer"}} className="material-symbols-outlined">logout</span>
                </div>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
