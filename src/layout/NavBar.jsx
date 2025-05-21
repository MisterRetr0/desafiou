import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navBg" variant="light">
      <Container>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Enlaces de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-custom">
              Colaborador
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-custom">
              Paciente
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-custom nav-link-btn">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link-custom nav-link-btn nav-link-btn">
              Registro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;