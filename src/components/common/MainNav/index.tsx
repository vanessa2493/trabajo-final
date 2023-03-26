import { FC } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "./styles.scss"
import { authService } from "../../../services/auth";
import { useAuth } from "../../../contexts";

type Props = {
  hideNav?: boolean;
};

const handleLogout = async () => {

  try {
    await authService.logout();
  } catch (error) {
    console.log(error);
  }
};

const MainNav: FC<Props> = ({ hideNav  }) => {
  const { currentUser } = useAuth();

  return (
    <Navbar className="main-nav" expand="lg">
      <Container fluid className="container-nav" >
        <Navbar.Brand href='/'>
          <h1>ConectADAs</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {hideNav ? (
              <>
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
                <NavLink className="nav-link" to={"/searchMovies"}>
                  Buscar Peliculas
                </NavLink>

                <NavLink className="nav-link" to={"/searchFriends"}>
                  Buscar Amigxs
                </NavLink>

                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                  <NavLink className="nav-link" to={"/profile"}>
                    Profile
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink className="nav-link" to={"/login"}>
                    Logout
                  </NavLink>
                </NavDropdown>
              </>
            ) : (
              <NavDropdown title={<i className="bi bi-person-circle"></i>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { MainNav };
