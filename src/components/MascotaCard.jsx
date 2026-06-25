function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas }) {
  const especieClass = especie?.toLowerCase() ?? 'otro'

  return (
    <article className={`mascota-card mascota-card--${especieClass}`}>
      <header className="mascota-card__header">
        <div className="mascota-card__title-row">
          <h2 className="mascota-card__nombre">{nombre}</h2>
          <span className={`mascota-card__especie especie--${especieClass}`}>
            {especie}
          </span>
        </div>
        <p className="mascota-card__meta">
          <span>{raza}</span> · <span>{edad} años</span>
        </p>
      </header>

      <section className="mascota-card__descripcion">
        <h3>Descripción</h3>
        <p>{descripcion}</p>
      </section>

      <section className="mascota-card__caracteristicas">
        <h3>Características</h3>
        <ul>
          {caracteristicas?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default MascotaCard
