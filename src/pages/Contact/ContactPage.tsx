import ContactDetail from "@/components/page/Contact/ContactDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const ContactPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <ContactDetail />
    </div>
  );
};
export default ContactPage;
