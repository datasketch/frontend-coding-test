// Next
import Image from "next/image";

// Styles
import s from "./TasksCard.module.css";

// NextUI Components
import { Switch } from "@nextui-org/react";

// Local Components
import { Loader } from "../Loader/Loader";

export function TasksCard({ error, loading, data }) {
  const { title, description, startDate, endDate, completed } = data;

  return (
    <div className={s.card}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred while fetching the data.</p>
      ) : (
        <>
          <div className={s.card__mainInfo}>
            <h1 className={s.card__title}>{title}</h1>
            <p className={s.card__description}>{description}</p>
          </div>

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
            <p className={s.card__dates__title}>Task status</p>
            <Switch
              checked={completed}
              size="md"
              color="success"
              iconOn={<Image src="/icons/check.svg" width={15} height={15} />}
              iconOff={<Image src="/icons/close.svg" width={15} height={15} />}
            />
          </div>
        </>
      )}
    </div>
  );
}
