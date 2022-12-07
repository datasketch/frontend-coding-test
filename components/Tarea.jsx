const Tarea = ({tarea,setTareaEditar, eliminarAlgoDelArreglo}) => {
  const { nombre,
      nombrePropietario,
      descripcion} = tarea

    const HandleSubmitEliminar = () => {
      const res = confirm('Are you sure you want')
      if(res == true){
        eliminarAlgoDelArreglo(tarea.id)
      }
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
        <button type="button" onClick={HandleSubmitEliminar}className="font-bold text-white bg-red-500 hover:bg-red-700 uppercase py-2 px-10 rounded-lg">eliminar</button>
        </div>
      </div>
    )
  }
  export default Tarea