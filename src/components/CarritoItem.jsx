import { Card, Button, Row, Col } from 'react-bootstrap'

function CarritoItem({ item, aumentarCantidad, disminuirCantidad, eliminarDelCarrito }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center g-3">
          <Col xs={4} md={2}>
            <img src={item.imagen} alt={item.nombre} className="img-fluid rounded" />
          </Col>
          <Col xs={8} md={4}>
            <h2 className="h5 mb-1">{item.nombre}</h2>
            <p className="texto-suave mb-0">${item.precio.toLocaleString('es-AR')} c/u</p>
          </Col>
          <Col xs={7} md={3} className="d-flex align-items-center gap-2">
            <Button size="sm" variant="outline-cyan" onClick={() => disminuirCantidad(item.id)} disabled={item.cantidad === 1}>−</Button>
            <span>{item.cantidad}</span>
            <Button size="sm" variant="outline-cyan" onClick={() => aumentarCantidad(item.id)} disabled={item.cantidad >= item.stock}>+</Button>
          </Col>
          <Col xs={5} md={3} className="text-end">
            <p className="precio mb-2">${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
            <Button size="sm" variant="outline-danger" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CarritoItem
