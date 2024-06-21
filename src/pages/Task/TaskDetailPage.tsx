import TaskDetail from "@/components/page/Tasks/TaskDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const TaskDetailPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <TaskDetail />
    </div>
  );
};
export default TaskDetailPage;
