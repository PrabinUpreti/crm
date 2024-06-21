import { IRowData } from "@/@types";
import { IGroupCellRendererParams } from "@ag-grid-community/core";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import Badge from "../../Badge/Badge";

export const rowData: IRowData[] = [
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
];

export const colDefs = [
  {
    field: "make",
    headerCheckboxSelection: true,
    headerName: "Brand",
    // enableRowGroup: true,

    // rowGroup: true,
    cellEditor: "agSelectCellEditor",
    cellRendererParams: {
      checkbox: true,
    } as IGroupCellRendererParams,
    checkboxSelection: true,
    // hide: true,
    cellEditorParams: {
      values: [
        "Tesla",
        "Ford",
        "Toyota",
        "Mercedes",
        "Fiat",
        "Nissan",
        "Vauxhall",
        "Volvo",
        "Jaguar",
      ],
    },
  },
  { field: "model" },
  { field: "price" },
  { field: "electric" },
  {
    field: "month",
    cellRenderer: (p: { value: string }) => {
      return <Badge label={p.value} variant={"outline"} />;
    },
    comparator: (valueA: string, valueB: string) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const idxA = months.indexOf(valueA);
      const idxB = months.indexOf(valueB);
      return idxA - idxB;
    },
  },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string; data: IRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer"
          />
          <EditIcon
            id={p.data.id}
            className="text-primary text-lg cursor-pointer"
          />
        </div>
      );
    },
  },
];

export const projectData = [
  {
    name: "Project A",
    createdBy: "John Doe",
    start_date: "2024-05-01",
    status: "Pending",
    due_date: "2024-06-15",
    priority: "High",
  },
  {
    name: "Project B",
    createdBy: "Jane Smith",
    start_date: "2024-04-20",
    status: "Not Started",
    due_date: "2024-07-10",
    priority: "Medium",
  },
  {
    name: "Project C",
    createdBy: "Alice Johnson",
    start_date: "2024-05-10",
    status: "Pending",
    due_date: "2024-06-30",
    priority: "Low",
  },
  {
    name: "Project D",
    createdBy: "Michael Brown",
    start_date: "2024-05-05",
    status: "Not Started",
    due_date: "2024-07-20",
    priority: "High",
  },
  {
    name: "Project E",
    createdBy: "Emily Davis",
    start_date: "2024-04-25",
    status: "Pending",
    due_date: "2024-07-05",
    priority: "Medium",
  },
  {
    name: "Project F",
    createdBy: "David Wilson",
    start_date: "2024-05-15",
    status: "Pending",
    due_date: "2024-07-25",
    priority: "Low",
  },
  {
    name: "Project G",
    createdBy: "Sophia Martinez",
    start_date: "2024-05-02",
    status: "Pending",
    due_date: "2024-06-20",
    priority: "Medium",
  },
  {
    name: "Project H",
    createdBy: "James Taylor",
    start_date: "2024-04-22",
    status: "Not Started",
    due_date: "2024-07-15",
    priority: "High",
  },
  {
    name: "Project I",
    createdBy: "Olivia Garcia",
    start_date: "2024-05-12",
    status: "Pending",
    due_date: "2024-07-10",
    priority: "Low",
  },
  {
    name: "Project J",
    createdBy: "William Hernandez",
    start_date: "2024-05-07",
    status: "Pending",
    due_date: "2024-07-30",
    priority: "High",
  },
];

export const taskData = [
  {
    name: "Task 1",
    createdBy: "Alice Smith",
    priority: "High",
    assignee: "Emma Johnson",
    start_date: "2024-05-02",
    due_date: "2024-06-05",
    status: "Pending",
  },
  {
    name: "Task 2",
    createdBy: "John Doe",
    priority: "Medium",
    assignee: "Michael Brown",
    start_date: "2024-05-03",
    due_date: "2024-06-10",
    status: "Not Started",
  },
  {
    name: "Task 3",
    createdBy: "Jane Smith",
    priority: "Low",
    assignee: "David Wilson",
    start_date: "2024-04-30",
    due_date: "2024-07-01",
    status: "Completed",
  },
  {
    name: "Task 4",
    createdBy: "Michael Brown",
    priority: "Medium",
    assignee: "Olivia Garcia",
    start_date: "2024-05-01",
    due_date: "2024-06-20",
    status: "Not Started",
  },
  {
    name: "Task 5",
    createdBy: "Alice Johnson",
    priority: "High",
    assignee: "Sophia Martinez",
    start_date: "2024-05-02",
    due_date: "2024-06-25",
    status: "Pending",
  },
  {
    name: "Task 6",
    createdBy: "David Wilson",
    priority: "Low",
    assignee: "John Doe",
    start_date: "2024-05-03",
    due_date: "2024-07-15",
    status: "Pending",
  },
  {
    name: "Task 7",
    createdBy: "Olivia Garcia",
    priority: "Medium",
    assignee: "Jane Smith",
    start_date: "2024-05-01",
    due_date: "2024-07-05",
    status: "Not Started",
  },
  {
    name: "Task 8",
    createdBy: "Sophia Martinez",
    priority: "High",
    assignee: "Alice Johnson",
    start_date: "2024-04-30",
    due_date: "2024-07-20",
    status: "Not Started",
  },
];

export const WorkspaceData = [
  {
    name: "Workspace 1",
    createdBy: "John Doe",
    createdOn: "2024-05-01",
    lastUpdated: "2024-05-05",
  },
  {
    name: "Workspace 2",
    createdBy: "Jane Smith",
    createdOn: "2024-04-20",
    lastUpdated: "2024-04-25",
  },
  {
    name: "Workspace 3",
    createdBy: "Alice Johnson",
    createdOn: "2024-05-10",
    lastUpdated: "2024-05-15",
  },
  {
    name: "Workspace 4",
    createdBy: "Michael Brown",
    createdOn: "2024-05-05",
    lastUpdated: "2024-05-10",
  },
  {
    name: "Workspace 5",
    createdBy: "Emily Davis",
    createdOn: "2024-04-25",
    lastUpdated: "2024-05-01",
  },
  {
    name: "Workspace 6",
    createdBy: "David Wilson",
    createdOn: "2024-05-15",
    lastUpdated: "2024-05-20",
  },
];
