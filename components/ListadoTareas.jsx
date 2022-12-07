import { useEffect, useState } from "react"
import FormularioTareas from "./FormularioTareas"
import Tarea from "./Tarea"

const ListadoTareas = ({ cliente }) => {
    const [trayendoTareas, setTrayendoTareas] = useState(JSON.parse(localStorage.getItem('tareas')) ?? [])
    const [tareasFiltradas, setTareasFiltradas] = useState([])
    const [tareaEditar, setTareaEditar] = useState({})


    useEffect(() => {
        let filtro = trayendoTareas.filter(element => element.usuarioCreador == cliente.id)
        setTareasFiltradas(filtro)
        localStorage.setItem('tareas', JSON.stringify(trayendoTareas))
    }, [trayendoTareas])

    const eliminarAlgoDelArreglo = id => {
        let eliminandoDelArreglo = tareasFiltradas.filter(element => element.id !== id)
        setTareasFiltradas(eliminandoDelArreglo)
        let eliminandoGlobal = trayendoTareas.filter(element => element.id !== id)
        setTrayendoTareas(eliminandoGlobal)
    }

    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="mt-12 md:flex">
                    <FormularioTareas
                        cliente={cliente}
                        setTrayendoTareas={setTrayendoTareas}
                        tareaEditar={tareaEditar}
                    />
                    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
                        {tareasFiltradas.length > 0 ?
                            <>
                                <h2 className="font-black text-3xl text-center">Listado de tareas</h2>
                                <p className="text-xl mt-5 mb-10 text-center" >Administra tus {""} <span className="text-indigo-600 font-bold">Tareas y agenda</span></p>
                                {tareasFiltradas.map(tarea => (
                                    <Tarea
                                        key={tarea.id}
                                        tarea={tarea}
                                        setTareaEditar={setTareaEditar}
                                        eliminarAlgoDelArreglo={eliminarAlgoDelArreglo}
                                        setTrayendoTareas={setTrayendoTareas}
                                        trayendoTareas={trayendoTareas}

                                    />
                                ))}
                            </> :
                            <>
                                <h2 className="font-black text-3xl text-center">No hay tareas</h2>
                                <p className="text-xl mt-5 mb-10 text-center" >Comienza agregando tareas {""}
                                    <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
                                </p>

                            </>
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
export default ListadoTareas