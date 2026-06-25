import MascotaCard from './MascotaCard'

function ListaMascotas({ mascotas }) {
  return (
    <div className="mascotas-grid">
      {mascotas.map((mascota) => (
        <MascotaCard key={mascota.id} {...mascota} />
      ))}
    </div>
  )
}

export default ListaMascotas
