import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="footer-react py-4 mt-4">
      <Container className="text-center texto-suave">
        <img src="/img/logo-reactTone-simple.png" alt="ReactTone" height="40" />
        <p className="mb-0 mt-2">ReactTone – Trabajo práctico N°1 Construccion de interfaces de usuario.</p>
      </Container>
    </footer>
  )
}

export default Footer
