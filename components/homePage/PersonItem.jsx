import Image from "next/image";

export const PersonItem = ({ person }) => {
  return (
    <figure>
      <Image width={30} height={30} src={person.picture} alt={person.fullName} />
      <figcaption>
        <h2>Name: {person.fullName}</h2>
        <h3>Age: {person.age}</h3>
        <h4>Occupation: {person.occupation}</h4>
      </figcaption>
    </figure>
  );
};
