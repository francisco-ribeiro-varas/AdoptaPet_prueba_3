import { useEffect, useState } from 'react'
import { mascotas } from './data/Mascotas'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'
import './App.css'

function App() {
  const [speciesFilter, setSpeciesFilter] = useState('Todas')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('Mascotas cargadas:', mascotas)
  }, [])

  const filteredMascotas = mascotas.filter((mascota) => {
    const speciesMatch =
      speciesFilter === 'Todas' ||
      mascota.especie.toLowerCase() === speciesFilter.toLowerCase()
    const searchMatch = mascota.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim())
    return speciesMatch && searchMatch
  })

  return (
    <>
      <div className="ticks"></div>

      <section id="mascotas">
        <div className="section-header">
          <h2>Adopta una mascota</h2>
          <p>Explora nuestras mascotas disponibles para adopción.</p>
        </div>

        <div className="mascotas-controls">
          <FiltroEspecie
            especieSeleccionada={speciesFilter}
            onChange={setSpeciesFilter}
          />

          <label className="search-label">
            Buscar por nombre:
            <input
              type="search"
              placeholder="Ej. Pelusa"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>

        {filteredMascotas.length === 0 ? (
          <p className="no-results">No coinciden con ninguna mascota.</p>
        ) : (
          <ListaMascotas mascotas={filteredMascotas} />
        )}
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App
