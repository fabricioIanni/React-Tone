import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const datosIniciales = {
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  entrega: 'envio',
  mensaje: '',
}

function FormularioCompra({ carritoVacio, onConfirmar }) {
  const [datos, setDatos] = useState(datosIniciales)

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onConfirmar(datos)
    setDatos(datosIniciales)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {carritoVacio && (
        <Alert variant="warning">Tu carrito está vacío. Agregá productos para poder confirmar la compra.</Alert>
      )}

      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control name="nombre" value={datos.nombre} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={datos.email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control name="telefono" value={datos.telefono} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="direccion">
        <Form.Label>Dirección o localidad</Form.Label>
        <Form.Control name="direccion" value={datos.direccion} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="entrega">
        <Form.Label>Método de entrega</Form.Label>
        <Form.Select name="entrega" value={datos.entrega} onChange={handleChange}>
          <option value="envio">Envío a domicilio</option>
          <option value="retiro">Retiro en tienda</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mensaje">
        <Form.Label>Mensaje o aclaración (opcional)</Form.Label>
        <Form.Control as="textarea" rows={3} name="mensaje" value={datos.mensaje} onChange={handleChange} />
      </Form.Group>

      <Button type="submit" className="btn-green" disabled={carritoVacio}>Confirmar compra</Button>
    </Form>
  )
}

export default FormularioCompra
