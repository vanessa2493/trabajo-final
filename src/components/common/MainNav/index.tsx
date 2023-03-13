import { FC } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.scss"
import { useAuth } from "../../../hooks";

type Props = {
  hideNav?: boolean;
};

const MainNav: FC<Props> = ({ hideNav }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
      <Navbar className="main-nav" expand="lg">
        <Container fluid className="container-nav">
          <Navbar.Brand href='/'>
            <h1>ConectADAs</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!currentUser && (
                  <>
                    <NavLink className="nav-link" to={"/login"}>
                      Ingresar
                    </NavLink>
                    <NavLink className="nav-link" to={"/signup"}>
                      Registrarse
                    </NavLink>
                  </>
              )}
              {currentUser && (
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
                    <NavDropdown title={currentUser.displayName} id="user-dropdown">
                      <NavLink className="nav-link" to={"/profile"}>
                        Profile
                      </NavLink>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export { MainNav };
