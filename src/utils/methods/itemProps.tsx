 
/* eslint-disable @typescript-eslint/no-explicit-any */

import Badge from "../../helpers/components/common/badges/Badge.tsx";
import { defaultThCss, tableTdCss, tableThCss } from "../constants/table.ts";

// ViewNavOrganizationle header
export const renderItemTableHead = ({
  headerGroups,
  handleHeaderClick,
}: any) => {
  return (
    <>
      {headerGroups.map((headerGroup: any) => {
        return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              const isId = column.Header.toLowerCase() === "id";
              return column.hideHeader === false ? null : (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`${
                    isId ? tableThCss(true) : tableThCss(false)
                  } ${defaultThCss}`}
                  onClick={() => handleHeaderClick(column)}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

// // ViewNavReorder header
// export const RenderItemTableHead = ({
//   headerGroups,
//   handleHeaderClick,
// }: any) => {
//   return (
//     <>
//       {headerGroups.map((headerGroup: any) => {
//         return (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column: any) => {
//               const { getSortByToggleProps } = column;
//               return column.hideHeader === false ? null : (
//                 <th
//                   {...column.getHeaderProps(getSortByToggleProps)}
//                   className={`${
//                     column.isSorted
//                       ? column.isSortedDesc
//                         ? "sort-desc py-7"
//                         : "sort-asc py-7"
//                       : tableThCss
//                   } ${defaultThCss}`}
//                   // className={`${
//                   //   isId ? tableThCss(false) : tableThCss(true)
//                   // } ${defaultThCss}`}
//                   onClick={() => handleHeaderClick(column)}
//                 >
//                   {column.render("Header")}
//                 </th>
//               );
//             })}
//           </tr>
//         );
//       })}
//     </>
//   );
// };
// // ViewNavOrganizationle body
// export const RenderItemTableBody = ({ rows, prepareRow }: any) => {
//   // console.log(rows, "rows");
//   const [clickedId, setClickedId] = useState(0);
//   const [testId, setTestId] = useState<number[] | any>([]);
//   const [isFlag, setIsFlag] = useState(false);

//   // currentTable,
//   // getTableProps,
//   // getTableBodyProps,
//   // renderHead,
//   // renderBody,

//   const handleRowClick = (e: any, id: number) => {
//     const clickedElement = e.target.parentElement.children[1];

//     if (clickedElement) {
//       const testId1 = Number(clickedElement.innerText);

//       setClickedId(id);
//       setIsFlag(!isFlag);
//       setTestId([...testId, testId1]);
//     }
//   };

//   // useEffect
//   useEffect(() => {
//     if (testId[testId.length - 2] !== clickedId) {
//       setIsFlag(true);
//     }
//   }, [clickedId, testId, isFlag]);

//   return (
//     <>
//       {/* {rows.map((row, i:number) => { */}
//       {rows.map((row: any, idx: number) => {
//         prepareRow(row);
//         const isLastRow = idx === rows.length - 1;
//         const clickedId = row.values.id;

//         return (
//           <React.Fragment key={idx}>
//             <tr
//               {...row.getRowProps()}
//               onClick={(e: any) => handleRowClick(e, clickedId)}
//             >
//               {row.cells.map((cell: any, idx: number) => {
//                 const isId = cell.column.Header.toLowerCase() === "id";
//                 const header = cell.column.Header.toLowerCase();
//                 const status = header === "status";
//                 const renderCell = cell.render("Cell");
//                 return (
//                   <td
//                     className={
//                       isId
//                         ? tableTdCss(isLastRow, true)
//                         : tableTdCss(isLastRow, false)
//                     }
//                     {...cell.getCellProps()}
//                     key={`${idx}.cell`}
//                   >
//                     {status ? (
//                       <Badge
//                         css={{}}
//                         status={
//                           renderCell === "Incomplete" ? "alert" : "success"
//                         }
//                         title={renderCell}
//                       />
//                     ) : (
//                       renderCell
//                     )}
//                   </td>
//                 );
//               })}
//             </tr>
//           </React.Fragment>
//         );
//       })}
//     </>
//   );
// };

export const renderItemTableBody = ({ rows, prepareRow }: any) => {
  return (
    <>
      {/* {rows.map((row, i:number) => { */}
      {rows.map((row: any, idx: number) => {
        prepareRow(row);
        const isLastRow = idx === rows.length - 1;
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: any) => {
              const header = cell.column.Header.toLowerCase();
              const status = header === "status";
              const renderCell = cell.render("Cell");
              return (
                <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
                  {status ? (
                    <Badge
                      css={{}}
                      status={renderCell === "Incomplete" ? "alert" : "success"}
                      title={renderCell}
                    />
                  ) : (
                    renderCell
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
