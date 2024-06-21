import Analytics from "@/components/page/Analytics/Analytics";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const AnalyticsPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <Analytics />
    </div>
  );
};

export default AnalyticsPage;
