//import react hooks
import { useState } from "react";

//import next functions
import Link from "next/link";

//import mui components
import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";

//import icons
import { BsFillCalendarDateFill, BsGenderAmbiguous } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaCity } from "react-icons/fa";

//import components
import { TableCheckbox } from "../../../components/Tables";

//import hooks
import { useFetchAndLoad } from "../../../hooks";

//import services
import { completedTask } from "../../../services/Tasks";

//import utils
import { handleDateCheckbox, columnsTaskList } from "../../../utils";

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3001/people/${id}`);
  const person = await res.json();

  const resTasks = await fetch(`http://localhost:3001/people/${id}/tasks`);
  const tasks = await resTasks.json();

  //check the dates of the tasks to mark as done those with the expired date
  const tasksForDate = tasks.map((task) => {
    return {
      ...task,
      completed: handleDateCheckbox(task.completed, task.endDate),
    };
  });

  return {
    props: { person, tasks: tasksForDate, id },
  };
}

const ProfileUser = ({ person, tasks, id }) => {
  const [list, setList] = useState(tasks);
  const { callEndpoint } = useFetchAndLoad();

  const {
    fullName,
    occupation,
    picture,
    age,
    description,
    email,
    phone,
    city,
    gender,
  } = person;

  /*
    makes a request to save the current state of the task,
    whether it is done or not
  */
  const handleCheckbox = async (id, state) => {
    try {
      await callEndpoint(completedTask(id, !state));

      const changeData = list.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            completed: !state,
          };
        }
        return row;
      });
      setList(changeData);
    } catch (error) {
      console.log({ error });
    }
  };

  const listController = columnsTaskList(handleCheckbox);
  return (
    <div className="profile-user">
      <div className="banner">
        <div className="profile-photo">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={""} src={picture} sx={{ width: 124, height: 124 }} />
            <div>
              <h2>{fullName}</h2>
              <p>{occupation}</p>
            </div>
          </Stack>
        </div>
        <Link href={`/profile/${id}/edit`}>
          <a href="" className="edit-profile">
            Edit
          </a>
        </Link>
      </div>

      <div className="info-profile">
        <section>
          <h3>About</h3>
          <p>{description}</p>
          <p>
            <BsFillCalendarDateFill /> {age} years old
          </p>
          <p>
            <BsGenderAmbiguous />
            {gender}
          </p>
          <p>
            <MdEmail />
            {email}
          </p>
          <p>
            <AiFillPhone />
            {phone}
          </p>
          <p>
            <FaCity />
            {city}
          </p>
        </section>

        <section>
          <TableCheckbox list={list} columns={listController} />
        </section>
      </div>
    </div>
  );
};
export default ProfileUser;
