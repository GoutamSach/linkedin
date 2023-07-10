import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./logo.png";
import HeaderOptions from "./header_options";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";

import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();
  const logoutofapp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header flex  justify-between pr-8  border-b-2 ">
      <div className="header_left flex flex-row   items-center ml-4">
        <div className=" ">
          <img src={logo} alt="" className="  w-14" />
        </div>
        <div className="div bg-gray-100  my-2 py-2  pl-2  rounded-lg  w-56 ">
          <SearchIcon />
          <input type="text" className="  outline-none bg-gray-100  " />
        </div>
      </div>

      <div className="right  text-gray-500 flex  space-x-5 justify-end ">
        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
          <HeaderOptions Icon={HomeIcon} />
          <h3 className="  ">Home</h3>
        </div>
        <div className="flex flex-col justify-center  items-center cursor-pointer hover:text-black">
          <HeaderOptions Icon={PeopleIcon} />
          <h3 className="  ">My Network</h3>
        </div>
        <div className="flex flex-col justify-center  items-center cursor-pointer hover:text-black">
          <HeaderOptions Icon={WorkIcon} />
          <h3 className=" ">Jobs</h3>
        </div>
        <div className="flex flex-col justify-center  items-center cursor-pointer hover:text-black">
          <HeaderOptions Icon={MessageIcon} />
          <h3 className=" ">Messaging</h3>
        </div>
        <div className="flex flex-col justify-center  items-center cursor-pointer hover:text-black">
          <HeaderOptions Icon={NotificationsIcon} />
          <h3 className=" ">Notifications</h3>
        </div>

        <div
          onClick={logoutofapp}
          className="flex flex-col justify-center  items-center cursor-pointer hover:text-black"
        >
          {/* <AccountCircleIcon /> */}
          <Avatar sx={{ width: 28, height: 28 }} />
          {/* <Avatar src={user.userName[0]} /> */}
          <h3 className=" ">user</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
