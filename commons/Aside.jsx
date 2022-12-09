//import next functions
import Link from "next/link";

//import mui components
import { Avatar } from "@mui/material";

//import icons
import { FaUsers } from "react-icons/fa";

export const Aside = () => {
  return (
    <aside>
      <div>logo</div>

      <div>
        <Avatar
          alt={""}
          src={"https://randomuser.me/api/portraits/lego/1.jpg"}
          sx={{ width: 100, height: 5 }}
          style={{ marginRight: "5px" }}
        />
        David Morales
      </div>

      <ul>
        <li>
          <Link href="/">
            <a href="" style={{ width: "100%" }}>
              <FaUsers />
              Users
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
