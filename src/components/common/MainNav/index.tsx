import { FC } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.scss"

type Props = {
  hideNav?: boolean;
};

const MainNav: FC<Props> = ({ hideNav }) => {
  const handleLogout = () => {
    //logout();
    console.log('logout')
    //navigate('/login'); // Redireccionar a la página de login después del logout
  };

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
                      <NavLink className="nav-link" to={"/login"} onClick={handleLogout}>
                        Logout
                      </NavLink>
                    </NavDropdown>
                  </>
              ) : (
                  <>
                    <NavLink className="nav-link" to={"/login"}>
                      Ingresar
                    </NavLink>
                    <NavLink className="nav-link" to={"/signup"}>
                      Registrarse
                    </NavLink>
                  </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export { MainNav };
