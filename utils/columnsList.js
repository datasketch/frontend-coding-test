//import next functions
import Link from "next/link";

//import mui components
import { Avatar, Checkbox, Typography } from "@mui/material";
import { Stack } from "@mui/system";

//import components
import { OptionMenu } from "../components";

export const columnsUserList = [
  {
    field: "fullName",
    headerName: "Full name",
    width: 300,
    renderCell: (params) => {
      return (
        <Link href={`/profile/${params.row.id}`}>
          <a href="" style={{ width: "100%" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={""} src={params.row.picture} />
              <Typography variant="subtitle2" noWrap>
                {params.row.fullName}
              </Typography>
            </Stack>
          </a>
        </Link>
      );
    },
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 120,
    renderCell: (params) => {
      return (
        <Link href={`/profile/${params.row.id}`}>
          <a href="" style={{ width: "100%", textAlign: "end" }}>
            <Typography variant="subtitle2" noWrap>
              {params.row.age}
            </Typography>
          </a>
        </Link>
      );
    },
  },
  {
    field: "occupation",
    headerName: "Occupation",
    width: 300,
    renderCell: (params) => {
      return (
        <Link href={`/profile/${params.row.id}`}>
          <a href="" style={{ width: "100%" }}>
            <Typography variant="subtitle2" noWrap>
              {params.row.occupation}
            </Typography>
          </a>
        </Link>
      );
    },
  },
  {
    field: "num_tasks",
    headerName: "N° tasks",
    width: 100,
    valueGetter: (params) => {
      return params.row.tasks.length;
    },
  },
];

export const columnsTaskList = (handleCheckbox) => [
  {
    field: "completed",
    headerName: "",
    width: 25,
    sortable: false,
    renderCell: (params) => {
      return (
        <Checkbox
          checked={params.row?.completed}
          onChange={() => handleCheckbox(params.row?.id, params.row?.completed)}
        />
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
    renderCell: (params) => {
      return (
        <p
          style={{
            textDecoration: params.row?.completed ? "line-through" : "none",
          }}
        >
          {params.row?.title}
        </p>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 225,
    renderCell: (params) => {
      return (
        <p
          style={{
            textDecoration: params.row?.completed ? "line-through" : "none",
          }}
        >
          {params.row?.description}
        </p>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return !params.row?.completed ? <p>Pending</p> : <p>Completed</p>;
    },
  },
  {
    field: "endDate",
    headerName: "End date",
    width: 100,
    sortable: false,
    renderCell: (params) => {
      return params.row?.endDate !== null ? <p>{params.row?.endDate}</p> : "";
    },
  },
  {
    field: "startDate",
    headerName: "",
    width: 25,
    sortable: false,
    renderCell: (params) => {
      return <OptionMenu id={params.row?.id} />;
    },
  },
];
