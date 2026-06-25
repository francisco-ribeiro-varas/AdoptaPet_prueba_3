import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { mascotas } from './data/Mascotas'
import MascotaCard from './components/MascotaCard'
import ListaMascotas from './components/ListaMascotas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Mascotas cargadas:', mascotas)
  }, [])

  return (
    <>
      
      <div className="ticks"></div>

      <section id="mascotas">
        <div className="section-header">
          <h2>Adopta una mascota</h2>
          <p>Explora nuestras mascotas disponibles para adopción.</p>
        </div>
        <ListaMascotas mascotas={mascotas} />
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App
