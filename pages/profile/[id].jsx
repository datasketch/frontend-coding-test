// React
import { useEffect } from "react";

// Next
import { useRouter } from "next/router";
import Image from "next/image";

// Local Components
import { ProfileDetails, SEO, TasksCard } from "../../components";

// Hooks
import { usePersonByID, useTasksByID } from "../../hooks";

// NextUI Components
import { Button } from "@nextui-org/react";

// Styles
import s from "../../styles/Profile.module.css";

function Person() {
  // Get the person ID from the URL
  const router = useRouter();
  const personID = router.query.id;

  const { getPersonByID, docsPerson, loadingPerson, errorPerson } =
    usePersonByID();

  const { getTasksByID, docsTasks, loadingTasks, errorTasks } = useTasksByID();

  useEffect(() => {
    getPersonByID(personID);
    getTasksByID(personID);
  }, [personID]);

  return (
    <div className={s.main}>
      <SEO title="Profile" />
      <Button
        onClick={() => router.back()}
        icon={
          <Image
            src="/icons/exit.svg"
            alt="Arrow Left"
            width={24}
            height={24}
          />
        }
      >
        Go Back
      </Button>
      <div className={s.profile}>
        <ProfileDetails
          data={docsPerson}
          loading={loadingPerson}
          error={errorPerson}
        />

        <div className={s.tasks__container}>
          {docsTasks.map((task) => (
            <TasksCard
              key={task.id}
              data={task}
              loading={loadingTasks}
              error={errorTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Person;
