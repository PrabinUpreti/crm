import { useGetOneFormQuery, usePublishFormMutation } from "@/api/GForm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PublishForm = () => {
  const { formId } = useParams();
  const { data: form, error, isLoading } = useGetOneFormQuery(formId);
  const [publishForm, { isLoading: isPublishing }] = usePublishFormMutation();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (form?.fields) {
      const initialFormData = form.fields.reduce((acc, field) => {
        if (field.type === "checkbox") {
          acc[field.label] = [];
        } else {
          acc[field.label] = "";
        }
        return acc;
      }, {});
      setFormData(initialFormData);
    }
  }, [form]);

  useEffect(() => {
    const publishInitialForm = async () => {
      try {
        await publishForm(formId);
      } catch (error) {
        console.log("Form published successfully on mount");
        console.error("Error publishing form on mount:", error);
      }
    };

    publishInitialForm();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      if (type === "checkbox") {
        const newValue = checked
          ? [...(prevState[name] || []), value]
          : (prevState[name] || []).filter((v) => v !== value);
        return {
          ...prevState,
          [name]: newValue,
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publishForm({ id: formId, ...formData }).unwrap();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading form</p>;

  return (
    <form
      id="form-container"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md"
    >
      {form?.fields?.map((field, index) => (
        <div key={`${field.label}-${index}`} className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            {field.label}:
            {field.type === "multiple_choice" ? (
              field.options.map((option, idx) => (
                <div
                  key={`${option}-${idx}`}
                  className="flex items-center mb-2"
                >
                  <input
                    type="radio"
                    name={field.label}
                    value={option}
                    checked={formData[field.label] === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-600">{option}</span>
                </div>
              ))
            ) : field.type === "checkbox" ? (
              field.options.map((option, idx) => (
                <div
                  key={`${option}-${idx}`}
                  className="flex items-center mb-2"
                >
                  <input
                    type="checkbox"
                    name={field.label}
                    value={option}
                    checked={(formData[field.label] || []).includes(option)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-600">{option}</span>
                </div>
              ))
            ) : (
              <input
                type={field.type}
                name={field.label}
                value={formData[field.label] || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isPublishing ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default PublishForm;
