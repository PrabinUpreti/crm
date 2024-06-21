import CreateProject from "@/components/page/Projects/CreateProject";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const CreateProjectPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <CreateProject />
    </div>
  );
};

export default CreateProjectPage;
