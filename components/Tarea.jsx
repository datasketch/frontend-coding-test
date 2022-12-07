import { useState } from "react"

const Tarea = ({ tarea, setTareaEditar, eliminarAlgoDelArreglo, setTrayendoTareas, trayendoTareas }) => {
  const [estado, setEstado] = useState('No completada')
  const { nombre,
    nombrePropietario,
    descripcion, completada } = tarea

  const HandleSubmitEliminar = () => {
    const res = confirm('Are you sure you want')
    if (res == true) {
      eliminarAlgoDelArreglo(tarea.id)
    }
  }

  const observandoComportamiento = (tarea) => {
    let switchedBoton
    if (tarea.completada == 'No completada') {
       switchedBoton = trayendoTareas.filter(element => element.id == tarea.id ? tarea.completada = 'completada' : null)
    } else {
       switchedBoton = trayendoTareas.filter(element => element.id == tarea.id ? tarea.completada = 'No completada' : null)
    }
       switchedBoton = switchedBoton[0]
       let arregloNuevo = trayendoTareas.map(element => element.id == tarea.id ? switchedBoton : element)
    setTrayendoTareas(arregloNuevo)

    setEstado(!estado)
  }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion: {""}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={() => setTareaEditar(tarea)} className="font-bold text-white bg-indigo-500 hover:bg-indigo-700 uppercase py-2 px-10 rounded-lg">editar</button>
        <div className="switch-button">

          <input type="checkbox" onClick={() => observandoComportamiento(tarea)} name={tarea.id} id={tarea.id} className="switch-button__checkbox" />
          <label htmlFor={tarea.id} className="switch-button__label"></label><br />
          <h1 className="font-bold">{completada}</h1>
        </div>

        <button type="button" onClick={HandleSubmitEliminar} className="font-bold text-white bg-red-500 hover:bg-red-700 uppercase py-2 px-10 rounded-lg">eliminar</button>
      </div>
    </div>
  )
}
export default Tarea