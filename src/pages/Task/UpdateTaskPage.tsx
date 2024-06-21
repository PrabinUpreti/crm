import UpdateTask from "@/components/page/Tasks/UpdateTask";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const UpdateTaskPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <UpdateTask />
    </div>
  );
};

export default UpdateTaskPage;
