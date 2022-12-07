// Next
import Link from "next/link";

// NextUI Components
import { User } from "@nextui-org/react";

// Styles
import s from "./Card.module.css";

export function Card({ data }) {
  const { id, name, age, occupation, img } = data;

  return (
    <>
      <Link href={`/profile/${id}`}>
        <div className={s.person}>
          <User
            className={s.person__details}
            squared
            size="lg"
            pointer
            src={img}
            name={`${name} - Age: ${age}`}
            description={occupation}
          />
        </div>
      </Link>
    </>
  );
}
