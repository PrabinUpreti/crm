import WorkspaceDetail from "@/components/page/Workspace/WorkspaceDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const WorkspaceDetailPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>PMS | Workspace Detail</Helmet>

      <WorkspaceDetail />
    </div>
  );
};
export default WorkspaceDetailPage;
