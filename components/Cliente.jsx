
const Cliente = ({ cliente }) => {
  const { fullName, gender, nickname, age, picture, occupation, id} = cliente
  return (
    <tr className="border hover:bg-gray-50">
      <td className="p-3">
        <img width='200' src={picture} alt={nickname} />
      </td>
      <td className="p-3">{fullName}</td>
      <td className="p-3">
        <p><span className="text-gray-800 uppercase font-bold">Nickname:</span>{nickname}</p>
        <p><span className="text-gray-800 uppercase font-bold">Edad:</span>{age}</p>
      </td>
      <td className="p-3">{gender}</td>
      <td className="p-3">{occupation}</td>
      <td className="p-3">
      <button type="button" className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-sm">ver </button>
        <button type="button" className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-sm">Editar</button>
      </td>
    </tr>
  )
}

export default Cliente