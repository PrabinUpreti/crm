import CreateContact from "@/components/page/Contact/CreateContact";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const CreateContactPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <CreateContact />
    </div>
  );
};

export default CreateContactPage;
