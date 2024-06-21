import Projects from "@/components/page/Projects/ProjectsDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const ProjectsPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <Projects />
    </div>
  );
};
export default ProjectsPage;
