import React from "react";
import Avatar from "@mui/material/Avatar";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PostOptions from "./postoptions";

function Post({ userName, Learningreactt, Postsss }) {
  return (
    <>
      <div className=" bg-white  mt-8 px-4  rounded-xl">
        <div className="flex  items-center pt-2 space-x-3 flex-row ">
          <Avatar />

          <div className="flex flex-col -space-y-1">
            <h3 className=" text-l font-bold">{userName}</h3>
            <p className=" text-gray-500">{Learningreactt}</p>
          </div>
        </div>

        <p className=" ml-2 mt-2 text-l">{Postsss}</p>

        <div className=" flex flex-row  justify-between px-8 py-4">
          <PostOptions Icon={ThumbUpAltOutlinedIcon} title="Like" />
          <PostOptions Icon={ChatOutlinedIcon} title="Comment" />
          <PostOptions Icon={ShareOutlinedIcon} title="Share" />
          <PostOptions Icon={SendOutlinedIcon} title="Send" />
        </div>
      </div>
    </>
  );
}

export default Post;
