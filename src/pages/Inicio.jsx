import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const categorias = [
  { nombre: 'Guitarras', texto: 'Criollas, acústicas, eléctricas y bajos.' },
  { nombre: 'Teclados', texto: 'Teclados, pianos digitales y sintetizadores.' },
  { nombre: 'Percusión', texto: 'Baterías, cajones, pads y bongós.' },
  { nombre: 'Accesorios', texto: 'Cuerdas, púas y afinadores.' },
]

function Inicio() {
  return (
    <>
      <section className="hero text-center">
        <Container>
          <img src="/img/logo-reactTone-apaisado.png" alt="ReactTone" className="hero-logo" />
          <h1 className="display-4">Bienvenido a ReactTone</h1>
          <p className="lead">
            Contamos con una amplia variedad de instrumentos musicales, accesorios y todo lo que necesitas para hacer crecer tu estudio!
          </p>
          <Button as={Link} to="/productos" size="lg" className="btn-cyan">Ver catálogo</Button>
        </Container>
      </section>

      <Container className="mt-5">
        <h2 className="mb-4">Explorá por categoría</h2>
        <Row xs={1} sm={2} lg={4} className="g-4"> 
          {categorias.map((cat) => (
            <Col key={cat.nombre}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{cat.nombre}</Card.Title>
                  <Card.Text className="texto-suave">{cat.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Inicio
