import { useState } from 'react'
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FormularioCompra from '../components/FormularioCompra'

function Contacto({ carrito, total, vaciarCarrito }) {
  const [compra, setCompra] = useState(null)
  const navigate = useNavigate()

  const cerrarModal = () => {
    setCompra(null)
    vaciarCarrito()
    navigate('/')
  }

  return (
    <Container>
      <h1 className="mb-4">Finalizar compra</h1>
      <Row className="g-4">
        <Col lg={7}>
          <FormularioCompra
            carritoVacio={carrito.length === 0}
            onConfirmar={(datos) => setCompra({ datos, total })}
          />
        </Col>
        <Col lg={5}>
          <Card>
            <Card.Body>
              <h2 className="h4">Resumen del pedido</h2>
              {carrito.length === 0 ? (
                <p className="texto-suave">Sin productos.</p>
              ) : (
                <ul className="list-unstyled">
                  {carrito.map((item) => (
                    <li key={item.id} className="d-flex justify-content-between">
                      <span>{item.nombre} x{item.cantidad}</span>
                      <span>${(item.precio * item.cantidad).toLocaleString('es-AR')}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="precio fs-5 mb-0">Total: ${total.toLocaleString('es-AR')}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={compra !== null} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Compra confirmada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {compra && (
            <>
              <p>Gracias por tu compra, {compra.datos.nombre}. Te enviaremos los detalles a {compra.datos.email}.</p>
              <p className="precio mb-0">Total: ${compra.total.toLocaleString('es-AR')}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-green" onClick={cerrarModal}>Volver al inicio</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Contacto
