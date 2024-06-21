import { BiChevronRight } from "react-icons/bi";

import { Outlet } from "react-router-dom";

const FormPageLayout = () => {
  return (
    <>
      <div className="flex w-fit text-[#848484] items-center text-md">
        Project <BiChevronRight />
        Create
      </div>
      <Outlet />
    </>
  );
};

export default FormPageLayout;
