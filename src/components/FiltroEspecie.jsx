function FiltroEspecie({ especieSeleccionada, onChange }) {
  return (
    <label className="filtro-especie">
      Especie:
      <select
        value={especieSeleccionada}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perro">Perros</option>
        <option value="Gato">Gatos</option>
        <option value="Otro">Otras Especies</option>
      </select>
    </label>
  )
}

export default FiltroEspecie
