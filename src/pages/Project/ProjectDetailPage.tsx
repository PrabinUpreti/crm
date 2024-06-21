interface Props {}
import ProjectDetail from "@/components/page/Projects/ProjectsDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}
const ProjectDetailPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <ProjectDetail />
    </div>
  );
};
export default ProjectDetailPage;
