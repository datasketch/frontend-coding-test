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

         <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar datos de un cliente</p>
      {/* {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
        />
      ) : 'No se encontro Usuario'} */}

    </>
    )
}