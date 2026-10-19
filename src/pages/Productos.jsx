import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ProductoCard from '../components/ProductoCard'
import productos from '../data/productos'

const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

function Productos({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [orden, setOrden] = useState('')
  const [soloStock, setSoloStock] = useState(false)

  let productosFiltrados = productos
    .filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .filter((p) => categoria === 'Todas' || p.categoria === categoria)
    .filter((p) => !soloStock || p.stock > 0)

  if (orden === 'asc') productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
  if (orden === 'desc') productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio)

  return (
    <Container>
      <h1 className="mb-4">Productos</h1>

      <Form className="mb-4">
        <Row className="g-3 align-items-end">
          <Col md={4}>
            <Form.Label>Buscar por nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder='Buscar:'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col sm={6} md={3}>
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              {categorias.map((c) => <option key={c}>{c}</option>)}
            </Form.Select>
          </Col>
          <Col sm={6} md={3}>
            <Form.Label>Ordenar por precio</Form.Label>
            <Form.Select value={orden} onChange={(e) => setOrden(e.target.value)}>
              <option value="">Sin ordenar</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Check
              type="checkbox"
              id="solo-stock"
              label="Solo con stock"
              checked={soloStock}
              onChange={(e) => setSoloStock(e.target.checked)}
            />
          </Col>
        </Row>
      </Form>

      {productosFiltrados.length === 0 ? (
        <p className="texto-suave">No se encontraron productos.</p>
      ) : (
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {productosFiltrados.map((producto) => (
            <Col key={producto.id}>
              <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default Productos
