import BookmarksDetail from "@/components/page/Bookmark/BookmarksDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const BookmarkDetailPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <BookmarksDetail />
    </div>
  );
};
export default BookmarkDetailPage;
