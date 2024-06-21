import UpdateProject from "@/components/page/Projects/UpdateProject";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const UpdateProjectPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <UpdateProject />
    </div>
  );
};

export default UpdateProjectPage;
