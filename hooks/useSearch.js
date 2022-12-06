// React
import { useState } from "react";

export const useSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e, data) => {
    const texto = e.target.value;
    const search = data.filter((person) => {
      return `${person.name}`.toLowerCase().includes(texto.toLowerCase());
    });

    if (texto === "") {
      setSearchText("");
      setSearchResult([]);
    } else {
      setSearchText(texto);
      setSearchResult(search);
    }
  };

  return {
    searchText,
    searchResult,
    handleInputChange,
  };
};
