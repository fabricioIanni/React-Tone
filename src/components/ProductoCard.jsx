import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductoCard({ producto, agregarAlCarrito }) {
  const hayStock = producto.stock > 0

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} className="producto-img" />
      <Card.Body className="d-flex flex-column">
        <Badge className="badge-categoria align-self-start mb-2">{producto.categoria}</Badge>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className="texto-suave">{producto.descripcion}</Card.Text>
        <p className="precio fs-5 mb-1">${producto.precio.toLocaleString('es-AR')}</p>
        <div className="mb-3">
          {hayStock
            ? <Badge className="badge-stock">Stock: {producto.stock}</Badge>
            : <Badge className="badge-sin-stock">Sin stock</Badge>}
        </div>
        <div className="d-grid gap-2 mt-auto">
          <Button as={Link} to={`/producto/${producto.id}`} className="btn-cyan">Ver detalle</Button>
          <Button className="btn-cyan" disabled={!hayStock} onClick={() => agregarAlCarrito(producto)}>
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductoCard
