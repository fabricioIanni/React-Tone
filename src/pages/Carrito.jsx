import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CarritoItem from '../components/CarritoItem'

function Carrito({ carrito, cantidadTotal, total, aumentarCantidad, disminuirCantidad, eliminarDelCarrito }) {
  if (carrito.length === 0) {
    return (
      <Container className="text-center">
        <h1>Carrito</h1>
        <p className="texto-suave">Tu carrito está vacío.</p>
        <Button as={Link} to="/productos" className="btn-cyan">Ver productos</Button>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="mb-4">Carrito</h1>
      <Row className="g-4">
        <Col lg={8}>
          {carrito.map((item) => (
            <CarritoItem
              key={item.id}
              item={item}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          ))}
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h2 className="h4">Resumen</h2>
              <p className="mb-1">Cantidad de productos: {cantidadTotal}</p>
              <p className="precio fs-4">Total: ${total.toLocaleString('es-AR')}</p>
              <div className="d-grid gap-2">
                <Button as={Link} to="/contacto" className="btn-green">Finalizar compra</Button>
                <Button as={Link} to="/productos" className="btn-cyan">Seguir comprando</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Carrito
