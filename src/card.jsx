import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import back from "./back.jpg";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function CardComp() {
  const [displayNamee, setdisplayName] = useState();
  const [emaile, setemail] = useState();
  const user = useSelector(selectUser);

  useEffect(() => {
    const auth = getAuth();
    // const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      setdisplayName(user.displayName);
      setemail(user.Learningreact);
    }
  }, []);

  // const user = useSelector(selectUser);
  const topics = (topic) => {
    return (
      <>
        <span className=" text-gray-500 font-bold   leading-loose cursor-pointer hover:bg-blue-100">
          #{topic}
        </span>
      </>
    );
  };
  return (
    <div className="flex    bg-gray-100  basis-1/6 ">
      <div className="flex flex-col mr-4">
        <div className="flex    flex-col   bg-white border border-gray-200  rounded-2xl justify-start  mb-4 ">
          <img src={back} alt="" className=" h-1/3 rounded-t-2xl " />
          <div className=" flex justify-center flex-col items-center -mt-4">
            <Avatar
              // src={user.userName[0]}
              sx={{ width: 28, height: 28 }}
              alt="Travis Howard"
              className="  mb-3"
            />
            <h1 className=" font-bold text-xl">{displayNamee}</h1>
            {/* <h2 className=" border-b-2 font-bold   text-xs -mt-1 text-gray-500 pb-4">
              {emaile}
            </h2> */}
          </div>
          <div className="mt-8 mb-2">
            <div className=" flex flex-row   justify-between  px-4">
              <h3 className="  text-gray-500 txt-xs font-semibold">
                Who Viewed You
              </h3>
              <h3 className=" px-2  text-blue-600 font-semibold">2543</h3>
            </div>
            <div className=" flex flex-row justify-between  px-4">
              <h3 className="  text-gray-500 font-semibold">Views on Post</h3>
              <h3 className=" px-2  text-blue-600 font-semibold">2448</h3>
            </div>
          </div>
        </div>
        <div className="flex  flex-col bg-white border border-gray-200  rounded-2xl basis-1/5 justify-start px-4  ">
          <h1 className=" font-bold">Recent</h1>

          {topics("reactJs")}
          {topics("JavaScript")}
          {topics("CSS")}
          {topics("Tailwind")}
          {topics("developer")}
        </div>
      </div>
    </div>
  );
}

export default CardComp;
