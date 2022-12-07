// Next
import Image from "next/image";

// Styles
import s from "./TasksCard.module.css";

// NextUI Components
import { Tooltip } from "@nextui-org/react";

// Local Components
import { Loader } from "../Loader/Loader";

export function TasksCard({ error, loading, data, markTask }) {
  const { id, title, description, startDate, endDate, completed } = data;
  return (
    <div className={s.card}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred while fetching the data.</p>
      ) : (
        <>
          <div className={s.card__mainInfo}>
            <h1 className={s.card__title}>
              {title} -{" "}
              <span
                className={completed ? `${s.completed}` : `${s.notCompleted}`}
              >
                {completed ? "Completed" : "Not completed"}
              </span>
            </h1>
            <p className={s.card__description}>{description}</p>
          </div>

          <div className={s.card__moreInfo}>
            <div className={s.card__dates__info}>
              <div>
                <p className={s.card__dates__title}>Start date:</p>
                <p className={s.card__date}>{startDate}</p>
              </div>
              <div>
                <p className={s.card__dates__title}>End date:</p>
                <p className={s.card__date}>
                  {!endDate ? "In Progress" : endDate}
                </p>
              </div>
            </div>
            <div className={s.card__status}>
              <p className={s.card__dates__title}>Actions</p>
              <div className={s.actions__buttons__group}>
                <Tooltip content={"Edit task info"} placement="topEnd">
                  <button className={s.actions__buttons}>
                    <Image src="/icons/editar.svg" width={20} height={20} />
                  </button>
                </Tooltip>
                <Tooltip
                  content={
                    completed
                      ? "Mark task as not completed"
                      : "Mark task as completed"
                  }
                  placement="topEnd"
                >
                  <button
                    // onClick={() => markTask(id)}
                    className={
                      !completed
                        ? `${s.actions__buttons} ${s.completed__button}`
                        : `${s.actions__buttons} ${s.notCompleted__button}`
                    }
                  >
                    {!completed ? (
                      <Image src="/icons/check.svg" width={20} height={20} />
                    ) : (
                      <Image src="/icons/close.svg" width={20} height={20} />
                    )}
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
