import CreateTask from "@/components/page/Tasks/CreateTask";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const CreateTaskPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <CreateTask />
    </div>
  );
};

export default CreateTaskPage;
