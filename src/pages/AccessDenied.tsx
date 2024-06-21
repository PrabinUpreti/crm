import { pageTitles } from "@/utils/constants/pageTitles";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}
const AccessDenied = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${pageTitles.accessDeniedPage}`}</Helmet>
      AccessDenied
    </div>
  );
};

export default AccessDenied;
