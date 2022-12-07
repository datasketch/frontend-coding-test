// React
import { useEffect } from "react";

// Next
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// Local Components
import { ProfileDetails, SEO, TasksCard } from "../../../components";

// Hooks
import { usePersonByID, useTasksByID } from "../../../hooks";

// NextUI Components

// Styles
import s from "../../../styles/Profile.module.css";

function Person() {
  // Get the person ID from the URL
  const router = useRouter();
  const personID = router.query.id;

  const { getPersonByID, docsPerson, loadingPerson, errorPerson } =
    usePersonByID();

  const { getTasksByID, docsTasks, markTask, loadingTasks, errorTasks } =
    useTasksByID();

  useEffect(() => {
    getPersonByID(personID);
    getTasksByID(personID);
  }, [personID]);

  return (
    <div className={s.main}>
      <SEO title="Profile" />

      {/* Go Back Button */}

      <Link href={"/"}>
        <button className={s.goBackButton}>
          <Image
            src="/icons/exit.svg"
            width={20}
            height={20}
            className={s.goBackButton__icon}
          />
          Go back
        </button>
      </Link>
      <div className={s.profile}>
        <div className={s.profile__details}>
          <ProfileDetails
            data={docsPerson}
            loading={loadingPerson}
            error={errorPerson}
          />
        </div>
        <div className={s.tasks}>
          <h2 className={s.tasks__title}>User Tasks</h2>
          <div className={s.tasks__container}>
            {docsTasks.map((task) => (
              <TasksCard
                key={task.id}
                data={task}
                markTask={markTask}
                loading={loadingTasks}
                error={errorTasks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
