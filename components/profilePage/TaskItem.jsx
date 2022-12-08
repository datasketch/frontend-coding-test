"use client";

import { useState } from "react";
import Link from "next/link";
export const TaskItem = ({ task }) => {
  const [status, setStatus] = useState(task.completed);
const changeStatus = () => {
    setStatus(!status)
}
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{status ? "done " : "undone"}</span>
      <button onClick={changeStatus}>{status ? "Mark as completed " : "Mark as not completed"}</button>
        <Link href={`task/${task.personId}/edit`} />
    </div>
  );
};
