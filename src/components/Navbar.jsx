import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar({ cantidadTotal }) {
  return (
    <BsNavbar expand="md" className="navbar-react" sticky="top">
      <Container>
        <BsNavbar.Brand as={NavLink} to="/">
          <img src="/img/logo-reactTone-apaisado.png" alt="ReactTone" height="48" />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="menu" />
        <BsNavbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">
              Carrito <Badge className="badge-carrito">{cantidadTotal}</Badge>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Finalizar compra</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
