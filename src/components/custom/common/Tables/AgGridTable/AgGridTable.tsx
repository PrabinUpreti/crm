 
"use strict";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import { AgGridReact } from "@ag-grid-community/react";
// import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
// import { MenuModule } from "@ag-grid-enterprise/menu";
// import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
// import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
// import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { IAgGridTableProps } from "@/@types";

import {
  ColDef,
  ModuleRegistry,
  // GetRowIdFunc,
  // GetRowIdParams,
  // RowSelectedEvent,
  // SelectionChangedEvent,
  // IGroupCellRendererParams,
  // ColGroupDef,
  // GridApi,
  // GridOptions,
  // GridReadyEvent,
  // IGroupCellRenderParams,
  // ISGroupOpenByDefaultParams,
  // ValueFormatterParams,
  // createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

// ag grid table custom css

// css
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
// import { Button } from "@/components/ui/Button/button";
import "./AgGridTable.css";

import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import DatePicker from "../../FormElements/DatePicker/DatePicker";

// module registration
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  // ClipboardModule,
  // MenuModule,
  // RangeSelectionModule,
  // RowGroupingModule,
  FiltersToolPanelModule,
  // ColumnsToolPanelModule,
  SetFilterModule,
  CsvExportModule,
  ExcelExportModule,
]);

// react table props interface
const AgGridTable: React.FC<IAgGridTableProps> = ({
  theme = "ag-theme-quartz",
  TableToolbarHOC,
  // height = 10,
  dropdownMenus,
  variant,
  colDefs: columnDefinations,
  rowData: tableData,
  rowSelection = "multiple",
  suppressRowClickSelection = true,
  pagination = true,
  paginationPageSize = 10,
  paginationPageSizeSelector = [10, 25, 50, 100],
  rowBuffer = 0,
  rowModelType = "clientSide",
  rowHeight = 45,
  onGridReady = () => {},
  onCellClicked,
  onCellValueChanged,
  onRowSelected,
  onFilterOpened,
  // sidebar = "filters",
  suppressMenuHide = false,
  rowDragMultiRow = true,
  rowMultiSelectWithClick = true,
  enableAdvanceFilter = false,
  // isRowSelectable = true,
}) => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState(tableData);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>();
  const { theme: appTheme } = useTheme();

  // container style

  const containerStyle = useMemo(() => ({}), []);

  // grid style
  // const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridStyle = useMemo(
    () => ({
      // maxHeight: 300,
    }),
    []
  );

  // number cell formatter
  // function numberCellFormatter(params: ValueFormatterParams) {
  //   return Math.floor(params.value)
  //     .toString()
  //     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }

  // default columns defination
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      // headerClass(params) {
      //   console.log(params);
      //   if (appTheme !== "dark") return "bg-[#F1F1F1]";
      // },
      // pinned: "right",
      filter: false,
      editable: false,
      floatingFilter: false,
      resizable: false,
      headerCheckboxSelection: false,
      showDisabledCheckboxes: true,
      headerCheckboxSelectionFilteredOnly: false,
      // cellRenderer: "agGroupCellRenderer",
      suppressHeaderMenuButton: true,
      flex: 1,
      minWidth: 150,
      // cellRendererParams: {
      //   checkbox: true,
      // } as IGroupCellRendererParams,
      // rowDrag: true,
      // rowDragText:"hello"
      // rowGroup: true,
      // hide:true
      // enableRowGroup:true
      // cellClass: "number",
      // enablePivot: true,
      //value formatter
      // headerCheckboxSelectionFilteredOnly:true,
      // headerCheckboxSelectionCurrentPageOnly:true
      // filter: "agTextColumnFilter",
      // filter: "agNumberColumnFilter",
      // checkboxSelection: true,
      //  valueFormatter:numberCellFormatter
      // enableValue = true,
      // flex: 1,
      // aggFunc: "sum",
      // field:""
    };
  }, []);

  // const autoGroupColumnDef = useMemo<ColDef>(() => {
  //   return {
  //     headerName: "Cars",
  //     field: "model",
  //     minWidth: 250,
  //     cellRenderer: "agGroupCellRenderer" | "agAnimateShowChangeCellRenderer",
  //     cellRendererParams: {
  //       checkbox: true,
  //     } as IGroupCellRendererParams,
  //   };
  // }, []);

  // will only re-run selection logic when count changes

  // const onRowSelected = useCallback(
  //   (event: RowSelectedEvent) => {
  //     window.alert(
  //       "row " +
  //         event.node.data.athlete +
  //         " selected = " +
  //         event.node.isSelected(),
  //     );
  //   },
  //   [window],
  // );

  // const onSelectionChanged = useCallback(
  //   (event: SelectionChangedEvent) => {
  //     var rowCount = event.api.getSelectedNodes().length;
  //     window.alert("selection changed, " + rowCount + " rows selected");
  //   },
  //   [window],
  // );

  // const selectAllAmerican = useCallback(() => {
  //   const selected: IRowNode[] = [];
  //   const deselected: IRowNode[] = [];
  //   gridRef.current!.api.forEachNode(function (node) {
  //     if (node.data!.country === "United States") {
  //       selected.push(node);
  //     } else {
  //       deselected.push(node);
  //     }
  //   });
  //   gridRef.current!.api.setNodesSelected({ nodes: selected, newValue: true });
  //   gridRef.current!.api.setNodesSelected({
  //     nodes: deselected,
  //     newValue: false,
  //   });
  // }, []);

  // use effect to set the  column definations and table data

  // const onBtnCSVExport = useCallback(() => {
  //   const exportCsvParams = { allColumns: true };
  //   gridRef.current!.api.exportDataAsCsv(exportCsvParams);
  // }, []);
  // const onBtnXLSXExport = useCallback(() => {
  //   const exportXLSXParams = { allColumns: true };
  //   gridRef.current!.api.exportDataAsExcel(exportXLSXParams);
  // }, []);

  const setSideBarVisible = useCallback((value: boolean) => {
    gridRef.current?.api.setSideBarVisible(value);
    gridRef.current!.api.openToolPanel("filters");
  }, []);

  const isSideBarVisible = useCallback(() => {
    return gridRef.current?.api.isSideBarVisible();
  }, []);

  useEffect(() => {
    setColumnDefs(columnDefinations);
    setRowData(tableData);
  }, [columnDefinations, tableData]);
  {
    /* <Button variant={"outline"} onClick={onBtnCSVExport}>
          Export CSV{" "}
        </Button>
        <Button variant={"default"} onClick={onBtnXLSXExport}>
          Export XLSX{" "}
        </Button> */
  }

  return (
    <div style={containerStyle} className="flex flex-col gap-[1rem] ">
      {
        <TableToolbarHOC
          isSideBarVisible={isSideBarVisible}
          setSideBarVisible={setSideBarVisible}
          dropdownMenus={dropdownMenus}
        />
      }

      {/* {TableToolbarHOC(isSideBarVisible, setSideBarVisible)} */}
      <div
        className={`${appTheme == "dark" ? "ag-theme-quartz-dark" : theme}  `}
        style={{ ...gridStyle }}
      >
        {variant === "primary" && (
          <Helmet>
            <link rel="stylesheet" href="/src/AgGridPrimaryTable.css" />
          </Helmet>
        )}

        <AgGridReact
          domLayout="autoHeight"
          gridOptions={{}}
          className=""
          ref={gridRef}
          rowData={rowData}
          // suppressMenuHide={true}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={rowSelection}
          suppressRowClickSelection={suppressRowClickSelection}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          onGridReady={onGridReady}
          enableRangeSelection={false}
          rowMultiSelectWithClick={rowMultiSelectWithClick}
          rowDragMultiRow={rowDragMultiRow}
          sideBar={{
            hiddenByDefault: true,
            toolPanels: [
              {
                id: "filters",
                // labelDefault: "Filters",
                // labelKey: "filters",
                // iconKey: "filter",
                labelDefault: "",
                labelKey: "",
                iconKey: "",
                toolPanel: "agFiltersToolPanel",
                minWidth: 180,
                maxWidth: 400,
                width: 250,
              },
            ],
            defaultToolPanel: "filters",
          }}
          suppressMenuHide={suppressMenuHide}
          enableAdvancedFilter={enableAdvanceFilter}
          rowBuffer={rowBuffer}
          rowModelType={rowModelType}
          rowHeight={rowHeight}
          onCellClicked={onCellClicked}
          onCellValueChanged={onCellValueChanged}
          onFilterOpened={onFilterOpened}
          groupSelectsChildren={true}
          groupSelectsFiltered={true}
          onRowSelected={onRowSelected}
          suppressCopyRowsToClipboard={true}
          components={{ agDateInput: DatePicker }}

          // rowDragEntireRow={true}

          // suppressCellFocus={true}

          // columnHoverHighlight={false}
          // suppressPaginationPanel={true}
          // animateRows={false}
          // paginateChildRows={true}
          // suppressScrollOnNewData={true}
          // rowGroupPanelShow={"always"}
          // pivotPanelShow={"always"}
          // suppressRowHoverHighlight={true}
          // paginationAutoPageSize={true}
          // getRowId={getRowId}
          // autoGroupColumnDef={autoGroupColumnDef}
          // isRowSelectable={isRowSelectable}
        />
      </div>
    </div>
  );
};
export default AgGridTable;
