import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import Formulario from '../../components/Formulario'


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
      <h1 className="font-black text-4xl text-blue-900 m-6">Editar Perfil</h1>
      <p className="mt-3 m-6">Utiliza este formulario para editar los datos de tu perfil</p>
      {cliente.fullName ? (
        <Formulario
          cliente={cliente}
        />
        
      ) : 'No se encontro Usuario'}

    </>
    )
}