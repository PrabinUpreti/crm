import ArchiveDetail from "@/components/page/Archive/ArchiveDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const ArchiveDetailPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <ArchiveDetail />
    </div>
  );
};
export default ArchiveDetailPage;
