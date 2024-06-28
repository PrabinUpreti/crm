import React, { useState } from "react";
import Field from "./GField";
import { BiPlus } from "react-icons/bi";
import { useAddGFormMutation } from "@/api/GForm";
import { Button } from "@/components/ui/Button/button";

interface FormField {
  id: number;
  label: string;
  type: string;
  options: string[]; // For multiple choice options or checkbox values
}

const GForm: React.FC = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [nextId, setNextId] = useState(1);
  const [formTitle, setFormTitle] = useState("");

  const addField = (type: string) => {
    const initialOptions =
      type === "multiple_choice" || type === "checkbox"
        ? ["Option 1", "Option 2"]
        : [];
    setFields([
      ...fields,
      { id: nextId, label: "", type, options: initialOptions },
    ]);
    setNextId(nextId + 1);
  };

  const handleLabelChange = (id: number, label: string) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, label } : field))
    );
  };

  const handleOptionsChange = (id: number, options: string[]) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, options } : field))
    );
  };

  const handleTypeChange = (id: number, type: string) => {
    const initialOptions =
      type === "multiple_choice" || type === "checkbox" ? [""] : [];
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, type, options: initialOptions } : field
      )
    );
  };

  const handleFieldRemove = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const [addGForm, { isLoading, isSuccess, isError, error }] =
    useAddGFormMutation();

  const handlePublish = async () => {
    const formData = {
      title: formTitle,
      fields: fields.map(({ label, type, options }) => ({
        label,
        type,
        options,
      })),
    };
    const totalValues = {
      ...formData,
      organization: "1", // Provide the organization value here
    };

    try {
      const result = await addGForm(totalValues);
      console.log("Contact added successfully", result);
    } catch (error) {
      console.error("Failed to add contact: ", error);
    }
    console.log("Form Data:", totalValues);
    // Add your form submission logic here (e.g., API call)
  };
  const handleSave = async () => {
    const formData = {
      title: formTitle,
      fields: fields.map(({ label, type, options }) => ({
        label,
        type,
        options,
      })),
    };
    const totalValues = {
      ...formData,
      organization: "1", // Provide the organization value here
    };

    try {
      const result = await addGForm(totalValues);
      console.log("Contact added successfully", result);
    } catch (error) {
      console.error("Failed to add contact: ", error);
    }
    console.log("Form Data:", totalValues);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="w-full p-2 border border-b-blue-700  focus:outline-none focus:border-blue-900"
        />
      </div>
      {fields.map((field) => (
        <Field
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          options={field.options}
          onLabelChange={handleLabelChange}
          onOptionsChange={handleOptionsChange}
          onTypeChange={handleTypeChange}
          onRemove={handleFieldRemove}
        />
      ))}
      <div className="flex justify-center">
        <button
          onClick={() => addField("text")}
          className=" bg-gray-300 text-white text-2xl rounded-full p-1  hover:bg-gray-600"
        >
          <BiPlus />
        </button>
      </div>
      {fields.length > 0 && (
        <div className="mt-4">
          <Button
            type="button"
            onClick={handleSave}
            variant={"default"}
            size={"lg"}
            className="px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </Button>
          <Button
            type="button"
            onClick={handlePublish}
            variant={"default"}
            size={"lg"}
            className="px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Publish
          </Button>
        </div>
      )}
    </div>
  );
};

export default GForm;
