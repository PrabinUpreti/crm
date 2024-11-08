import ContactList from "@/components/page/Contact/ContactList";
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
      <ContactList />
    </div>
  );
};
export default ContactPage;
