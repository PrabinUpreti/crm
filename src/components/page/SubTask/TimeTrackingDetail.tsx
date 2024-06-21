import React from "react";
import TimeTrackingTable from "./TimeTrackingTable";
import { ITask } from "@/@types";
import Timer from "@/components/custom/common/Timer/Timer";

interface ITimeTrackingDetailProps {
  task: ITask;
}
const TimeTrackingDetail: React.FC<ITimeTrackingDetailProps> = ({ task }) => {
  return (
    <div>
      <Timer />
      <TimeTrackingTable timeTrackings={task.timeTrackings} />
    </div>
  );
};

export default TimeTrackingDetail;
