import { PlusIconSlim } from "../icons/commonIcons";

const AddCard = () => {
  return (
    <div className=" border-2 border-dashed  w-full h-full flex items-center justify-center rounded-lg flex-col cursor-pointer">
      <PlusIconSlim className="text-primary text-5xl" />
      <p className="font-semibold text-gray-500">Create a Workspace</p>
    </div>
  );
};

export default AddCard;
