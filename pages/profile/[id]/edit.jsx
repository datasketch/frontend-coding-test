// React
import { useEffect } from "react";

// Next
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Hooks
import { usePersonByID } from "../../../hooks/usePersonByID";

// Styles
import s from "../../../styles/EditPerson.module.css";

// Local Components
import { SEO } from "../../../components";

// NextUI Components

// Hooks
import EditProfileForm from "../../../components/EditProfileForm/EditProfileForm";

function EditPerson() {
  const router = useRouter();
  const personID = router.query.id;

  const { docsPerson, getPersonByID } = usePersonByID();

  useEffect(() => {
    getPersonByID(personID);
  }, [personID]);

  return (
    <>
      <SEO title="Edit Person Info" />

      <div className={s.main}>
        <div className={s.editPerson}>
          <EditProfileForm data={docsPerson} />
        </div>
      </div>
    </>
  );
}

export default EditPerson;
