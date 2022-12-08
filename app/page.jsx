import { People } from "../components/homePage/People";

export const fetchPeople = async () => {
  const data = await fetch("http://localhost:3001/people");
  return data.json();
};

export default async function HomePage() {

  return (
    <main>
        <People/>
    </main>
  );
}
