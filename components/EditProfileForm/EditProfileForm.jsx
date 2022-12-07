// React
import { useEffect, useState } from "react";

// NextUI Components
import { Avatar, Badge, Button, Input } from "@nextui-org/react";

// Axios
import axios from "axios";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// React Hot Toast
import { toast } from "react-hot-toast";

// Styles
import s from "./EditProfileForm.module.css";
import Image from "next/image";

function EditProfileForm({ data }) {
  const router = useRouter();

  // Form
  const [formValues, setFormValues] = useState({
    picture: "",
    fullName: "",
    age: 0,
    occupation: "",
    nickname: "",
    gender: "",
  });

  const [oneformValues, setOneFormValues] = useState(null);

  // Disabled
  const [disabled, setDisabled] = useState(true);

  // Open input for picture
  const [openInput, setOpenInput] = useState(false);

  // Handle On Change
  const handleOnInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle On Submit
  const handleOnSubmit = async (e, id) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/people/${id}`, {
        ...formValues,
      });
      toast.success("Person info updated successfully");
      router.push(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFormValues(data);
    setOneFormValues(data);
  }, [data]);

  useEffect(() => {
    if (
      formValues.picture === oneformValues?.picture &&
      formValues.fullName === oneformValues?.fullName &&
      formValues.nickname === oneformValues?.nickname &&
      parseInt(formValues.age) === parseInt(oneformValues?.age) &&
      formValues.occupation === oneformValues?.occupation &&
      formValues.gender === oneformValues?.gender
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValues, oneformValues]);

  return (
    <form
      className={s.editPerson__form}
      onSubmit={(e) => handleOnSubmit(e, oneformValues?.id)}
    >
      <h1 className={s.editPerson__title}>Edit Person Info</h1>
      <div className={s.editPerson__avatar}>
        <Badge
          content={
            <Image src="/icons/editar.svg" alt="Edit" width={20} height={20} />
          }
          disableOutline
          shape="circle"
          placement="bottom-right"
          size="xs"
          css={{ cursor: "pointer" }}
          onClick={() => {
            setOpenInput(!openInput);
          }}
        >
          <Avatar
            src={
              oneformValues?.picture &&
              oneformValues?.picture.slice(0, 4) === "http"
                ? oneformValues?.picture
                : "/default.jpg"
            }
            alt={oneformValues?.fullName}
            className={s.avatar}
          />
        </Badge>
      </div>
      {openInput && (
        <div>
          <p className={s.editPerson__input__label}>Picture URL</p>
          <Input
            onChange={handleOnInputChange}
            fullWidth
            aria-label="New picture URL"
            placeholder="New picture URL"
            initialValue={oneformValues?.picture}
            name="picture"
          />
        </div>
      )}
      <div>
        <p className={s.editPerson__input__label}>Full name</p>
        <Input
          onChange={handleOnInputChange}
          fullWidth
          aria-label="Full name"
          placeholder="Full name"
          initialValue={oneformValues?.fullName}
          name="fullName"
        />
      </div>
      <div className={s.editPerson__nickname__age}>
        <div>
          <p className={s.editPerson__input__label}>Nickname</p>
          <Input
            onChange={handleOnInputChange}
            fullWidth
            aria-label="Nickname"
            placeholder="Nickname"
            initialValue={oneformValues?.nickname}
            name="nickname"
          />
        </div>
        <div>
          <p className={s.editPerson__input__label}>Age</p>
          <Input
            onChange={handleOnInputChange}
            type="number"
            fullWidth
            aria-label="Age"
            placeholder="Age"
            initialValue={oneformValues?.age}
            name="age"
          />
        </div>
      </div>
      <div>
        <p className={s.editPerson__input__label}>Occupation</p>
        <Input
          onChange={handleOnInputChange}
          fullWidth
          aria-label="Occupation"
          placeholder="Occupation"
          initialValue={oneformValues?.occupation}
          name="occupation"
        />
      </div>
      <div>
        <p className={s.editPerson__input__label}>Gender</p>
        <Input
          onChange={handleOnInputChange}
          fullWidth
          aria-label="gender"
          placeholder="gender"
          initialValue={oneformValues?.gender}
          name="gender"
        />
      </div>

      <div className={s.editPerson__buttons__container}>
        <Link href={`/profile/${oneformValues?.id}`}>
          <button
            type="button"
            className={`${s.editPerson__button} ${s.cancel}`}
          >
            Cancel
          </button>
        </Link>
        <button
          disabled={disabled}
          type="submit"
          className={`${s.editPerson__button} ${
            disabled ? ` ${s.disabled__button}` : ` ${s.submit}`
          }`}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProfileForm;
