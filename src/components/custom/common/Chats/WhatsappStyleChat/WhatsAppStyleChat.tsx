import { FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaCamera } from "react-icons/fa";
import { GrMicrophone } from "react-icons/gr";

const MessageBox = () => {
  return (
    <div>
      <div className="bg-green-500 p-2 text-white flex gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <FaArrowLeft />
          <CgProfile />
          ABC
        </div>
        <div className="flex gap-4">
          <CiVideoOn />
          <FaPhoneAlt />
          <BsThreeDotsVertical />
        </div>
      </div>
      <form
        className="flex items-center p-4 space-x-4"
        style={{ width: "100%", marginTop: "100px" }}>
        <div className="relative" style={{ width: "400px" }}>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5  hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <GrAttachment />
          </button>
          <button
            type="submit"
            className="absolute end-12 bottom-2.5 hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaCamera />
          </button>
        </div>
        <div
          style={{
            backgroundColor: "rgb(34, 196, 94)",
            borderRadius: "50%",
            padding: "10px",
            color:"#ffff"
          }}>
          <GrMicrophone />
        </div>
      </form>
    </div>
  );
};

export default MessageBox;
