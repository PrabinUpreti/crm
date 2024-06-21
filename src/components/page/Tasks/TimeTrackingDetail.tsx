import React from "react";
import TimeTrackingTable from "./TimeTrackingTable";
import { ITask } from "@/@types";

interface ITimeTrackingDetailProps {
  task: ITask;
}
const TimeTrackingDetail: React.FC<ITimeTrackingDetailProps> = () => {
  return (
    <div>
      <TimeTrackingTable />
    </div>
  );
};

export default TimeTrackingDetail;
