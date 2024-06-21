import Workspaces from "@/components/page/Workspaces/Workspaces";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const WorkspacesPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <Workspaces />
    </div>
  );
};

export default WorkspacesPage;
