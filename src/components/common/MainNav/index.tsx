import { FC } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss"

type Props = {
  hideNav?: boolean;
};

const MainNav: FC<Props> = ({ hideNav  }) => {
  return (
    <Navbar className="main-nav" >
      <Container>
        <Navbar.Brand>
          {" "}
          <h1>ConectADAs</h1>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!hideNav ? (
              <>
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
                <Link className="nav-link" to={"/"}>
                  Buscar Amigos
                </Link>

                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                  <Link className="nav-link" to={"/"}></Link>
                  <Link className="nav-link" to={"/"}></Link>
                  <Link className="nav-link" to={"/"}></Link>
                  <NavDropdown.Divider />
                  <Link className="nav-link" to={"/"}>
                    Logout
                  </Link>
                </NavDropdown>
              </>
            ) : (
              <>
                <Link className="nav-link" to={"/"}>
                  Ingresar
                </Link>
                <Link className="nav-link" to={"/"}>
                  Registrarse
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { MainNav };
