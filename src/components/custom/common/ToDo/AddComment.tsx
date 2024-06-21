import { useState } from "react";
import { AutosizeTextarea } from "../FormElements/AutosizeTextArea/AutosizeTextArea";
import {
  LikeIconFilled,
  LikeIconOutlined,
  ReplyIconOutlined,
} from "../icons/commonIcons";

const AddComment = () => {
  const [isReply, setIsReply] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const handleReplyToggle = () => {
    setIsReply((prev) => !prev);
  };

  return (
    <div className="flex gap-[0.5rem]  flex-col items-start justify-start">
      <h1 className="font-semibold text-lg "> Add comment</h1>
      <AutosizeTextarea minHeight={100} maxHeight={400} />
      <h2 className="text-lg font-[500]">Comments</h2>
      <div className="flex flex-col gap-[1rem] text-sm">
        <div>
          <h2 className="text-base font-[500] flex flex-col gap-2">singh</h2>
          <div className="flex items-center gap-3 ">
            <p className="text-foreground/70">
              This is the comment made by hero
            </p>
            <div className="flex gap-3 items-center text-lg">
              {isLiked ? (
                <LikeIconFilled
                  onClick={handleLikeToggle}
                  className="cursor-pointer text-primary"
                />
              ) : (
                <LikeIconOutlined
                  onClick={handleLikeToggle}
                  className="cursor-pointer"
                />
              )}
              <ReplyIconOutlined
                onClick={handleReplyToggle}
                className="cursor-pointer"
              />
            </div>
          </div>
          {isReply && (
            <div className="mb-4 p-4 border round-lg mt-5">
              <p className="mb-2 text-lg front-semibold ml-7"> Singh</p>

              <div className="ml-4 border-1-2 pl-4">
                {/* <button className='text-blue-500 hover:underline'>Reply</button> */}
                <div className="mt-2">
                  <textarea className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Submit Reply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddComment;
