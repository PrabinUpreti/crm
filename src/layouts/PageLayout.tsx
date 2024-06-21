import { BiChevronRight } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { Export } from "../helpers/assets/img/index.ts";
import Button from "../../../../stories/Button.tsx";
import { useAppDispatch } from "../hooks/useStoreHooks.ts";
import { setAddItemTrue } from "../redux/retail-module/retailSlice.tsx";

const PageLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex w-fit text-[#848484] items-center text-md">
        Project <BiChevronRight />
        Items
      </div>
      <div className="flex w-full justify-between px-2">
        <div className="flex items-center h3 font-extrabold">Items</div>
        <div className="flex items-center px-2 gap-2 h-8 hover:bg-green-600 hover:text-[#FFFFFF] rounded-md cursor-pointer transition duration-300">
          <img
            className="h-[21px] text-[#018134] w-6 hover:text-[#FFFFFF]"
            src={Export}
            alt="Export"
          />
          <p className="p1-r w-28 text-[#018134] font-medium  hover:text-[#FFFFFF] ">
            Export Report
          </p>
        </div>
      </div>
      <div className="h-10 flex justify-between px-2">
        <div className="w-80 flex items-center">
          <input
            className=" h-full w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 appearance-none"
            type="search"
            placeholder="Enter Items"
            name="items_search"
          />
          <div className="-ml-10  flex items-center justify-center h-10 w-10 text-gray-400 text-2xl">
            <IoSearch />
          </div>
        </div>
        <div className="flex h-full items-center">
          <Button
            category="small"
            type="primary"
            text="Add"
            variation="icon"
            icon={<IoMdAdd />}
            onClick={() => dispatch(setAddItemTrue(true))}
          />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
