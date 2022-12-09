// import mui components
import { Avatar, IconButton } from "@mui/material";

//import icons
import { FaUsers } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <IconButton>
            <FaUsers />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <IoMdNotifications />
          </IconButton>
        </li>
        <li>
          <Avatar
            alt={""}
            src={"https://randomuser.me/api/portraits/lego/1.jpg"}
            sx={{ width: 35, height: 35 }}
            style={{ cursor: "pointer" }}
          />
        </li>
      </ul>
    </nav>
  );
};
