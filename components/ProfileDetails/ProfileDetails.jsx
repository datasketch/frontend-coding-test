// Next
import Image from "next/image";

// NextUI Components
import { Avatar, Button } from "@nextui-org/react";

// Local Components
import { Loader } from "../Loader/Loader";

// Styles
import s from "./ProfileDetails.module.css";

export function ProfileDetails({ error, loading, data }) {
  const { fullName, age, occupation, nickname, gender, picture } = data;

  return (
    <div className={s.profile__container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred while fetching the data.</p>
      ) : (
        <>
          <div className={s.profile__avatar}>
            <Avatar src={picture} alt={fullName} className={s.avatar} />
          </div>
          <h1 className={s.profile__name}>{fullName}</h1>
          <p className={s.profile__info__title}>User information</p>
          <p className={s.profile__info}> Age: {age}</p>
          <p className={s.profile__info}>Nickname: {nickname}</p>
          <p className={s.profile__info}>Occupation: {occupation}</p>
          <p className={s.profile__info}>Gender: {gender}</p>

          {/* Edit Button */}

          <Button
            icon={
              <Image
                src="/icons/editar.svg"
                alt="Edit"
                width={20}
                height={20}
              />
            }
            color="primary"
            size="md"
            className={s.profile__editButton}
          >
            Edit Profile Info
          </Button>
        </>
      )}
    </div>
  );
}
