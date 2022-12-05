import ListsContainer from "../ListsContainer";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";

function ProfileList() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3001/people")
    .then(response => response.json())
    .then(result => setData(result))
  }, []);

  return (
    <ListsContainer>
      <div className="grid gap-4 justify-center auto-rows-min md:auto-cols-max w-full h-full rounded-md p-4">
        {data.map((profileEX) => (
          <ProfileCard
            key={profileEX.id}
            id={profileEX.id}
            name={profileEX.fullName}
            source={profileEX.picture}
            age={profileEX.age}
            occupation={profileEX.occupation}
          />
        ))}
      </div>
    </ListsContainer>
  );
}

export default ProfileList;
