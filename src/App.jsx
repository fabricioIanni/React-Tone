import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'

function App() {
  const [carrito, setCarrito] = useState([])

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  useEffect(() => {
    document.title = cantidadTotal > 0 ? `(${cantidadTotal}) ReactTone` : 'ReactTone'
  }, [cantidadTotal])

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((item) => item.id === producto.id)
    if (!existente) {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    } else if (existente.cantidad < producto.stock) {
      setCarrito(carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ))
    }
  }

  const aumentarCantidad = (id) => {
    setCarrito(carrito.map((item) =>
      item.id === id && item.cantidad < item.stock ? { ...item, cantidad: item.cantidad + 1 } : item
    ))
  }

  const disminuirCantidad = (id) => {
    setCarrito(carrito.map((item) =>
      item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    ))
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])

  return (
    <>
      <Navbar cantidadTotal={cantidadTotal} />
      <main className="py-4">
        <Routes>
          <Route path="/" element= {<Inicio />} />
          <Route path="/productos" element= {<Productos agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/producto/:id" element= {<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element= {<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarDelCarrito={eliminarDelCarrito}/>}/>
          <Route path="/contacto" element= {<Contacto carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
