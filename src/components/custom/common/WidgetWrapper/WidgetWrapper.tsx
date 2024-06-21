import React from "react";
import { CrossIcon, ExpandIcon } from "../icons/commonIcons";
import Modal from "../Modal/Modal";

export interface IWidgetWrapper {
  children: React.ReactNode;
}
const WidgetWrapper: React.FC<IWidgetWrapper> = ({ children }) => {
  return (
    <div className="relative group bg-block ">
      <div className="absolute top-[0.7rem] right-[0.5rem]  items-center hidden text-gray-500 gap-[1rem]   group-hover:flex transition-all ">
        <Modal
          size="full"
          trigger={<ExpandIcon className="cursor-pointer" />}
          body={<div className=" ">{children}</div>}
        />
        <CrossIcon className={"cursor-pointer"} />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default WidgetWrapper;
