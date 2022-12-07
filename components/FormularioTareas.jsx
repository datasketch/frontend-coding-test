import { useState } from "react"
import { useEffect } from "react"
import Alerta from './Alerta'
const FormularioTareas = ({setTrayendoTareas, cliente,tareaEditar}) => {
    const [tareas, setTareas] = useState(localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [])
    const [nombre, setNombre] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [Alerta , setAlerta] = useState(false) 

    useEffect(( ) => {
        setTrayendoTareas(tareas)
        localStorage.setItem('tareas', JSON.stringify(tareas))
    },[tareas])
    const HandleSudmit = (e) => {
        e.preventDefault()
        if([nombre, nombrePropietario, descripcion].includes('')){
            setAlerta(true)
            return;
        } 
        const generadoraID = () => {
            let random = Math.random().toString(36).substring(2);
            let fecha = Date.now().toString(36)
            return random + fecha;
        }
        const objeto_carta = {
            usuarioCreador: cliente.id,
            nombre,
            nombrePropietario,
            descripcion,
        }

        if(tareaEditar.id){
            objeto_carta.id = tareaEditar.id
            const nuevoArreglo = tareas.map(viejoArreglo => viejoArreglo.id === tareaEditar.id ? objeto_carta : viejoArreglo)
            setTareas(nuevoArreglo)
            tareaEditar = ""
        } else {
            objeto_carta.id = generadoraID();
            setTareas([...tareas, objeto_carta])
        }
      
        setAlerta(false)
        setNombre("")
        setNombrePropietario("")
        setdescripcion("")
      
    }
    useEffect(() => {
        if(Object.keys(tareaEditar).length > 0){
            setNombre(tareaEditar.nombre)
            setNombrePropietario(tareaEditar.nombrePropietario)
            setdescripcion(tareaEditar.descripcion)
        }
    },[tareaEditar])
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Tareas</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade tareas y {""}
                <span className="text-indigo-600 font-bold">Administralas</span>
            </p>
            {Alerta && <Alerta children={<p>Todos los Campos son obligatorios</p>} />}
            <form onSubmit={HandleSudmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre tarea</label>
                    <input id="mascota" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre Tarea" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propetiario</label>
                    <input id="propietario" type="text" value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)} placeholder="Nombre Propetiario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
           
                <div className="mb-5">
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">Descripcion</label>
                    <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="descripcion" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} placeholder="ej. Realizacion de un carrito..."></textarea>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all" value= {tareaEditar.id ? "Editar tarea"  : "Agregar Tarea"} />
            </form>
        </div>
    )
}
export default FormularioTareas