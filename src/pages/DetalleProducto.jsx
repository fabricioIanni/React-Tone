import { useEffect } from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import productos from '../data/productos'

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))


  if (!producto) {
    return (
      <Container>
        <h1>Producto no encontrado</h1>
        <Button as={Link} to="/productos" className="btn-cyan mt-3">Volver al catálogo</Button>
      </Container>
    )
  }

  const hayStock = producto.stock > 0

  return (
    <Container>
      <Row className="g-4">
        <Col md={6}>
          <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
        </Col>
        <Col md={6}>
          <Badge className="badge-categoria mb-2">{producto.categoria}</Badge>
          <h1>{producto.nombre}</h1>
          <p className="precio fs-3">${producto.precio.toLocaleString('es-AR')}</p>
          <p>{producto.descripcion}</p>
          <h2 className="h5">Características</h2>
          <ul>
            {producto.caracteristicas.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p>
            {hayStock
              ? <Badge className="badge-stock">Stock disponible: {producto.stock}</Badge>
              : <Badge className="badge-sin-stock">Sin stock</Badge>}
          </p>
          <div className="d-flex gap-2 flex-wrap">
            <Button as={Link} to="/productos" className="btn-cyan">Volver al catálogo</Button>
            <Button className="btn-cyan" disabled={!hayStock} onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DetalleProducto
