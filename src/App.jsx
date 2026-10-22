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
  const [cantidadTotal, setCantidadTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    document.title = cantidadTotal > 0 ? `(${cantidadTotal}) ReactTone` : 'ReactTone'
  }, [cantidadTotal])

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((item) => item.id === producto.id)
    if (!existente) {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
      setCantidadTotal(cantidadTotal + 1)
      setTotal(total + producto.precio)
    } else if (existente.cantidad < producto.stock) {
      setCarrito(carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ))
      setCantidadTotal(cantidadTotal + 1)
      setTotal(total + producto.precio)
    }
  }

  const aumentarCantidad = (id) => {
    const existente = carrito.find((item) => item.id === id)
    if (existente.cantidad < existente.stock) {
      setCarrito(carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      ))
      setCantidadTotal(cantidadTotal + 1)
      setTotal(total + existente.precio)
    }
  }

  const disminuirCantidad = (id) => {
    const existente = carrito.find((item) => item.id === id)
    if (existente.cantidad > 1) {
      setCarrito(carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      ))
      setCantidadTotal(cantidadTotal - 1)
      setTotal(total - existente.precio)
    }
  }

  const eliminarDelCarrito = (id) => {
    const existente = carrito.find((item) => item.id === id) // guarda el item para saber su cantidad
    setCarrito(carrito.filter((item) => item.id !== id))
    setCantidadTotal(cantidadTotal - existente.cantidad)// aca usa existente.cantidad para decrementar cantidad total N puntos
    setTotal(total - existente.precio * existente.cantidad)
  }

  const vaciarCarrito = () => {
    setCarrito([])
    setCantidadTotal(0)
    setTotal(0)
  }

  return (
    <>
      <Navbar cantidadTotal={cantidadTotal} />
      <main className="py-4">
        <Routes>
          <Route path="/" element= {<Inicio />} />
          <Route path="/productos" element= {<Productos agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/producto/:id" element= {<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element= {<Carrito carrito={carrito} cantidadTotal={cantidadTotal} total={total} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarDelCarrito={eliminarDelCarrito}/>}/>
          <Route path="/contacto" element= {<Contacto carrito={carrito} total={total} vaciarCarrito={vaciarCarrito} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
