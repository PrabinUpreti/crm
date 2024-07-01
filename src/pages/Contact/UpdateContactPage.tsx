import UpdateContact from "@/components/page/Contact/UpdateContact";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const UpdateContactPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <UpdateContact />
    </div>
  );
};

export default UpdateContactPage;
