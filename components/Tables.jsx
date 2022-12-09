//import react hooks
import { useState } from "react";

//import mui components
import { DataGrid } from "@mui/x-data-grid";

//import icons
import { BiSearch } from "react-icons/bi";

export const TableFilter = ({ list, columns }) => {
  const [input, setInput] = useState("");

  //This function filters the list, by name and occupation
  const handleFiler = () =>
    list.filter(
      (people) =>
        people?.fullName?.toLowerCase().includes(input?.toLowerCase()) ||
        people?.occupation?.toLowerCase().includes(input?.toLowerCase())
    );

  const listFilter = handleFiler();

  return (
    <div style={{ height: 400, width: "100%" }} className="user-list">
      <div className="search-input">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <BiSearch />
      </div>
      <DataGrid
        rows={listFilter}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export const TableCheckbox = ({ list, columns }) => {
  return (
    <div style={{ height: 400, width: "100%" }} className="user-task">
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
