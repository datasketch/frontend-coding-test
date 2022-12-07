import Link from "next/link";

const Cliente = ({ cliente }) => {
  const { fullName, gender, nickname, age, picture, occupation, id } = cliente
  return (
    <tr className="border hover:bg-gray-100">
      <td className="p-3 ">
        <img width='200' className="m-auto" src={picture} alt={nickname} />
      </td>
      <td className="p-3 text-center">{fullName}</td>
      <td className="p-3 text-center">
        <p><span className="text-gray-800 uppercase font-bold">Nickname:  </span>{nickname}</p>
        <p><span className="text-gray-800 uppercase font-bold">Edad:  </span>{age}</p>
      </td>
      <td className="p-3 text-center">{gender}</td>
      <td className="p-3 text-center">{occupation}</td>
      <td className="p-3 text-center">
        <div className="bg-blue-600 hover:bg-blue-700 block w-1/2 mb-3 text-white  p-2 uppercase font-bold text-lg">
          <Link href="/verCliente/[id]" as={`/verCliente/${id}`} type="button" > Ver</Link>
        </div>
      </td>
    </tr>
  )
}

export default Cliente