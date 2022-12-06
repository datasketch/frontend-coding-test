// React
import { useState } from "react";

// NextUI Components
import { Dropdown, Input } from "@nextui-org/react";

// Styles
import s from "./SearchBar.module.css";

export function SearchBar({ data, handleInputChange, onOrderChange }) {
  const [selected, setSelected] = useState(new Set(["Age"]));

  return (
    <div className={s.searchBar}>
      <Input
        fullWidth
        placeholder="Search for a person..."
        aria-label="Search"
        onChange={(e) => {
          handleInputChange(e, data);
        }}
      />

      <Dropdown>
        <Dropdown.Button>Order by: {selected}</Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          onAction={(e) => onOrderChange(e)}
        >
          <Dropdown.Item key="Age">Age</Dropdown.Item>
          <Dropdown.Item key="Name">Name</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
