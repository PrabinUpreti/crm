import { useGetGFormQuery } from "@/api/GForm";
import clsx from "clsx";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import _ from "lodash";
import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { colDefs } from "./colDefs";
import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";

type Field = {
  type?: string;
  label?: string;
  value?: string;
  options?: string;
};

type Props = {};

const GFormDetails = (props: Props) => {
  const { data: form } = useGetGFormQuery("");

  const [rowData, setRowData] = React.useState([]);

  console.log(rowData);
  const formatRowData = (data) => {
    return data.map((item) => {
      if (item.fields && typeof item.fields === "string") {
        try {
          const parsedFields = JSON.parse(item.fields);
          return { ...item, fields: parsedFields };
        } catch (error) {
          return item;
        }
      }
      return item;
    });
  };

  React.useEffect(() => {
    if (form) {
      const formattedData = formatRowData(form);
      setRowData(formattedData);
    }
  }, [form]);

  return <AgGridTable heading="Form" rowData={rowData} colDefs={colDefs} />;
};

export default GFormDetails;
