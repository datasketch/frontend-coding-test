import { useEffect, useMemo, useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import PeopleCard from '../components/PeopleCard';

export default function HomePage({ people }) {
  const [sorter, setSorter] = useState(true);
  const [sortedPeople, setSortedPeople] = useState(people);

  const sortedpeople = useMemo(() => {
    if (sorter) {
      return sortedPeople.sort((a, b) => a.age - b.age);
    } else {
      return sortedPeople.sort((a, b) => b.age - a.age);
    }
  }, [sortedPeople, sorter]);

  const peoplemapped = sortedpeople.map((item) => (
    <PeopleCard people={item} key={item.id} />
  ));

  return (
    <section className='p-4'>
      <div className='flex justify-between items-center px-3'>
        <h1 className='text-3xl text-center font-bold my-3'>People</h1>
        <button
          onClick={() => setSorter((prev) => !prev)}
          className='flex justify-between items-center'
        >
          {sorter ? 'Youngest to oldest' : 'Oldest to youngest'}
          {sorter ? <IconChevronDown /> : <IconChevronUp />}
        </button>
      </div>
      <div className='flex flex-wrap justify-center'>{peoplemapped}</div>
    </section>
  );
}

export async function getServerSideProps() {
  const URI = process.env.API_URL;
  const res = await fetch(`${URI}/people`);
  const data = await res.json();
  return {
    props: {
      people: data,
    },
  };
}
