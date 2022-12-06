import Image from 'next/image';
import Link from 'next/link';

export default function PeopleCard({ people }) {
  return (
    <Link href={`/profile/${people.id}`}>
      <div className='rounded-lg shadow-lg bg-white w-[18rem] cursor-pointer m-3 transform transition-all hover:translate-y-2'>
        <Image
          className='rounded-t-lg'
          src={people.picture}
          alt={people.fullName}
          width={300}
          height={270}
        />
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>
            {people.fullName}
          </h5>
          <ul>
            <li>Age: {people.age}</li>
            <li>Occupation: {people.occupation}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
