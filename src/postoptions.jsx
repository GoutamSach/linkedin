import React from "react";

function PostOptions({ Icon, title }) {
  return (
    <div className=" flex text-gray-500 flex-row items-center  gap-2">
      <Icon /> {title}
    </div>
  );
}

export default PostOptions;
