import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'


export default () => {
    const [cliente, setcliente] = useState({})
    const [cargando, setcargando] = useState(false)
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    useEffect(() => {
        console.log(id)
        setcargando(!cargando)
        const obtener = async () => {
            try {
                let respuesta = await fetch(`http://localhost:3001/people/${id}`)
                respuesta = await respuesta.json()
                setcliente(respuesta)
            } catch (error) {
                console.log(error)
            }
            setcargando(false)
        }
        obtener()
    }, [id])
    return (

        

        Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (

            <div>
                {cargando ? <h1> cargando....</h1> : (
                    <>
                     <div className="inline-flex items-center m-8 px-1 py-1 text-lg font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link  href="/">
                                   Atras
                                </Link>
                                </div>
                        <div className="max-w-sm m-auto mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-black dark:border-gray-800">
                            <a href="#">
                                <img className="rounded-t-lg w-3/4 m-auto p-3" src={cliente.picture} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h6 className='text-white'>Nombre:</h6>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 dark:text-white text-start">{cliente.fullName}</h5>
                                </a>
                                <h6 className='text-white'>Nick:</h6>
                                <h3 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-start">{cliente.nickname} </h3>
                                <h6 className='text-white'>Edad:</h6>
                                <h3 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-start">{cliente.age} </h3>
                                <h6 className='text-white'>Genero:</h6>
                                <h3 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-start">{cliente.gender} </h3>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{cliente.occupation}</p>
                                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link  href="/verPerfil/[id]" as={`/verPerfil/${cliente.id}`}>
                                    Ver perfil
                                </Link>
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </div>
                            
                            </div>
                        </div>


                    </>
                )}
            </div>
        )
    )
}