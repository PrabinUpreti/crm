import { IProjectRowData } from "@/@types";
import Badge from "@/components/custom/common/Badge/Badge";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "../common/Tags/Tags";
import { faker } from "@faker-js/faker";
export const colDefs = [
  {
    field: "name",
    headerCheckboxSelection: true,
    pinned: "left",
    headerName: "Inventory Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
       
      // const { workspaceId, projectId } = useParams();
      return (
        // <Link
        //   className="hover:underline"
        //   to={`/workspace/${workspaceId}/project/${projectId}/task/${p.data.id}`}>
        // </Link>
        p.value
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    filter: true,
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={p.value}
            variant={faker.helpers.arrayElement([
              "dark",
              "indigo",
              "purple",
              "red",
              "green",
              "pink",
              "yellow",
              "primary",
              "dark",
            ])}
          />
        </div>
      );
    },
  },
  // {
  //   field: "subCategory",
  //   headerName: "Sub Category",
  //   cellRenderer: (p: { value: string }) => {
  //     return (
  //       <div>
  //         <Badge label={p.value} variant={"outline"} />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   field: "unitPrice",
  //   cellRenderer: (p: { value: string }) => {
  //     return (
  //       <div>
  //         <Tags
  //           className="py-1"
  //           value={p.value}
  //           variant={faker.helpers.arrayElement([
  //             "dark",
  //             "indigo",
  //             "purple",
  //             "red",
  //             "green",
  //             "pink",
  //             "yellow",
  //             "primary",
  //             "dark",
  //           ])}
  //         />
  //       </div>
  //     );
  //   },
  // },
  {
    field: "quantity",
    filter: true,
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge variant="outline" label={p.value} />
        </div>
      );
    },
  },
  // {
  //   field: "totalPrice",
  //   cellRenderer: (p: { value: string }) => {
  //     return (
  //       <div>
  //         <Tags
  //           className="py-1"
  //           value={p.value}
  //           variant={faker.helpers.arrayElement([
  //             "dark",
  //             "indigo",
  //             "purple",
  //             "red",
  //             "green",
  //             "pink",
  //             "yellow",
  //             "primary",
  //             "dark",
  //           ])}
  //         />
  //       </div>
  //     );
  //   },
  // },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer text-base"
          />
          <EditIcon
            id={p.data.id}
            className="text-primary text-2xl cursor-pointer"
          />
        </div>
      );
    },
  },
];
