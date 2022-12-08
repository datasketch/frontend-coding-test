"use client";
import { useEffect, useState } from "react";
import { fetchPeople } from "../../app/page";
import { PersonItem } from "./PersonItem";
import Link from "next/link";

export const People = () => {
  const [filter, setFilter] = useState("younguest");
  const [listOfPeople, setListOfPeople] = useState([]);
  async function getPeople(filterValue) {
    const people = await fetchPeople();
    const sortedPeople = people.sort((a, b) => {
      return filterValue === "oldest" ? b.age - a.age : a.age - b.age;
    });
    setListOfPeople(sortedPeople);
  }
  const handleChange = (e) => {
    let { value } = e.target;
    setFilter(value);
  };

  useEffect(() => {
    getPeople(filter);
  }, [filter]);

  return (
    <>
      <select name="filter" value={filter} onChange={(e) => handleChange(e)}>
        <option>younguest</option>
        <option>oldest</option>
      </select>
      <section>
        {listOfPeople.map((person, index) => (
          <Link href={`/profile/${person.id}`} key={index}>
            <PersonItem  person={person} />
          </Link>

        ))}
      </section>
    </>
  );
};
