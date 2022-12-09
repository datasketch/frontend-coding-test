//import next functions
import Link from "next/link";

//components
import { TableFilter } from "../components/Tables";

//utils
import { columnsUserList } from "../utils/columnsList";

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3001/people?_embed=tasks`);
  const listPeople = await res.json();

  const orderForAge = listPeople.sort((a, b) => a.age - b.age);
  return {
    props: { listPeople: orderForAge },
  };
}

export default function HomePage({ listPeople }) {
  return (
    <div>
      <div className="title-principal-page">
        <h2>User list</h2>
        <div>
          <Link href={`/profile/new`}>
            <a href="">Create new person</a>
          </Link>
          <Link href={`/tasks/new`}>
            <a href="">Create new task</a>
          </Link>
        </div>
      </div>
      <TableFilter list={listPeople} columns={columnsUserList} />
    </div>
  );
}
