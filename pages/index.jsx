// Local Components
import { Card, MiniLoader, SearchBar, SEO } from "../components";

// Hooks
import { usePeople, useSearch } from "../hooks";

// Styles
import s from "../styles/Home.module.css";

function HomePage() {
  const { loadingPeople, errorPeople, docsPeople, setFilterPeople } =
    usePeople();

  const { searchText, searchResult, handleInputChange } = useSearch();

  return (
    <>
      <SEO title="Inicio" />
      <div className={s.main}>
        <SearchBar
          data={docsPeople}
          handleInputChange={handleInputChange}
          onOrderChange={setFilterPeople}
        />

        {loadingPeople ? (
          <MiniLoader />
        ) : errorPeople ? (
          <p>An error occurred while fetching the data.</p>
        ) : (
          <div className={s.cards__list}>
            {searchText && searchResult.length === 0 ? (
              <h3>No results found for: {searchText}</h3>
            ) : searchResult.length > 0 ? (
              <>
                {searchResult.map((person) => (
                  <Card key={person.id} data={person} />
                ))}
              </>
            ) : (
              <>
                {docsPeople.map((person) => (
                  <Card key={person.id} data={person} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
