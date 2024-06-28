import { mail } from "../../assets/images";
import { TrashIcon } from "@/components/custom/common/icons/commonIcons";
import { Divide } from "lucide-react";
import React from "react";
import { BiPlus } from "react-icons/bi";

interface FieldProps {
  id: number;
  label: string;
  type: string;
  options: string[]; // For multiple choice options or checkbox values
  onLabelChange: (id: number, label: string) => void;
  onOptionsChange: (id: number, options: string[]) => void; // For handling options change
  onTypeChange: (id: number, type: string) => void;
  onRemove: (id: number) => void;
}

const Field: React.FC<FieldProps> = ({
  id,
  label,
  type,
  options,
  onLabelChange,
  onOptionsChange,
  onTypeChange,
  onRemove,
}) => {
  const handleOptionChange = (index: number, optionValue: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = optionValue;
    onOptionsChange(id, updatedOptions);
  };

  const addOption = () => {
    const updatedOptions = [...options, ""];
    onOptionsChange(id, updatedOptions);
  };

  const removeOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    onOptionsChange(id, updatedOptions);
  };

  return (
    <div className="mb-4 p-4 bg-white rounded-md shadow-md">
      <div className="grid grid-cols-3 gap-[1rem]  justify-between mb-[1rem]">
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => onLabelChange(id, e.target.value)}
          className=" p-2 col-span-2  border border-b-blue-300 focus:outline-none focus:border-b-blue-500"
        />

        <select
          value={type}
          onChange={(e) => onTypeChange(id, e.target.value)}
          className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="text">Text</option>
          <option value="email">
            <img src={mail} alt="Email" width="20" height="20" />
            Email
          </option>
          <option value="multiple_choice">Multiple Choice</option>
          <option value="checkbox">Checkbox</option>
        </select>
        {/* Render options input if type is multiple_choice or checkbox */}
        {(type === "multiple_choice" || type === "checkbox") && (
          <div>
            {options.map((option, index) => (
              <div
                key={index}
                className="flex  py-3 gap-[0.5rem] items-center mb-2"
              >
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full  p-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={addOption}
                  className=" bg-gray-300 text-white text-sm rounded-full p-1 hover:bg-gray-600"
                >
                  <BiPlus />
                </button>
                <TrashIcon
                  onClick={() => removeOption(index)}
                  className="text-destructive cursor-pointer text-xl"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <hr />
      <div className="flex items-end w-full justify-end my-[0.7rem] ">
        <TrashIcon
          onClick={() => onRemove(id)}
          className="text-destructive cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Field;
