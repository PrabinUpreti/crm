 
import {
  GanttComponent,
  DayMarkers,
  Inject,
  Selection,
  Toolbar,
  Edit,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import { taskModeData } from "./data.js";

const GanttChart = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    endDate: "EndDate",
    dependency: "Predecessor",
    child: "Children",
    manual: "isManual",
  };
  const labelSettings = {
    leftLabel: "TaskName",
  };
  const splitterSettings = {
    position: "35%",
  };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  };
  const toolbar = [
    "Add",
    "Edit",
    "Update",
    "Delete",
    "Cancel",
    "ExpandAll",
    "CollapseAll",
  ];
  const projectStartDate = new Date("02/20/2017");
  const projectEndDate = new Date("03/30/2017");
  return (
    <div className="control-pane">
      <div className="control-section">
        <GanttComponent
          id="TaskMode"
          dataSource={taskModeData}
          treeColumnIndex={1}
          allowSelection={true}
          highlightWeekends={true}
          toolbar={toolbar}
          editSettings={editSettings}
          splitterSettings={splitterSettings}
          height="450px"
          taskMode="Custom"
          taskFields={taskFields}
          labelSettings={labelSettings}
          projectStartDate={projectStartDate}
          projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field="TaskID" visible={false}></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Task Name"></ColumnDirective>
            <ColumnDirective
              field="isManual"
              headerText="Task Mode"></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit, Selection, Toolbar, DayMarkers]} />
        </GanttComponent>
      </div>
    </div>
  );
};
export default GanttChart;
