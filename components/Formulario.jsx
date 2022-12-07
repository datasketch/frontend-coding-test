import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import Alerta from './Alerta'
const Formulario = ({ cliente }) => {
    const router = useRouter()
    const validateYupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(18, 'El nombre es muy largo')
            .required('El nombre es obligatorio'),
        nickname: Yup.string().required(' nickName es obligatorio'),
        age: Yup.number()
            .positive('la edad es invalida')
            .required('edad Es obligatorio'),
        gender: Yup.string()
        .min(3, 'El genero es muy corto')
        .max(10, 'El genero es muy largo')
        .required('El genero es obligatorio'),
        occupation: Yup.string()
        .min(3, 'ocupacion es muy corta')
        .max(19, 'ocupacion es muy larga')
        .required('ocupacion es obligatoria'),
    })
    const onsubmit1 = async (values) => {
        try {
            if (cliente.id) {
                const respuesta = await fetch(`http://localhost:3001/people/${cliente.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: { 'Content-Type': 'application/json' }
                })
                await respuesta.json()
                router.push(`/verCliente/${cliente.id}`)

                
            } 

        } catch (error) {
            console.log(error)
        }
    }
    return (
            <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-lg shadow-gray-600 md:w-3/4 mx-auto">
                <h1 className="text-gray-600 font-black text-xl uppercase"> Editar : {cliente.fullName}</h1>
                <Formik
                    initialValues={{
                        fullName: cliente?.fullName ?? '',
                        nickname: cliente?.nickname ?? '',
                        age: cliente?.age ?? '',
                        gender: cliente?.gender ?? '',
                        picture: cliente?.picture ?? '',
                        occupation: cliente?.occupation ?? ''
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, { resetForm }) => {
                        onsubmit1(values)
                        resetForm()
                    }}
                    validationSchema={validateYupSchema}
                >
                    {({ errors, touched }) => {
                        return (
                            <Form
                                className="mt-10"
                            >
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='fullName'
                                    >Nombre:</label>
                                    <Field
                                        id="fullName"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50 "
                                        placeholder="Nombre del Cliente"
                                        name="fullName"
                                    />
                                    {touched.fullName && errors.fullName ? <Alerta>{errors.fullName}</Alerta> : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='nickname'
                                    >Nick:</label>
                                    <Field
                                        id="nickname"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Nck del Cliente"
                                        name="nickname"
                                    />
                                    {touched.nickname && errors.nickname ? <Alerta>{errors.nickname}</Alerta> : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='age'
                                    >Edad:</label>
                                    <Field
                                        id="age"
                                        type="number"
                                        className="mt-2 block w-full p-3 bg-gray-50 "
                                        placeholder="Edad del Cliente"
                                        name="age"
                                    />
                                    {touched.age && errors.age ? <Alerta>{errors.age}</Alerta> : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='occupation'
                                    >Ocupacion:</label>
                                    <Field
                                        id="occupation"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50 "
                                        placeholder="Edad del Cliente"
                                        name="occupation"
                                    />
                                    {touched.occupation && errors.occupation ? <Alerta>{errors.occupation}</Alerta> : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='gender'
                                    >Genero:</label>
                                    <Field
                                        id="gender"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50 "
                                        placeholder="genero del Cliente"
                                        name="gender"
                                    />
                                    {touched.gender && errors.gender ? <Alerta>{errors.gender}</Alerta> : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor='picture'
                                    >url:</label>
                                    <Field
                                        id="picture"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="colocar url"
                                        name="picture"
                                    />
                                </div>
                                <input type="submit" value='Editar perfil' className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )

    
}

export default Formulario