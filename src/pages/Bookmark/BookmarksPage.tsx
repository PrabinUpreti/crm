import Bookmarks from "@/components/page/Bookmarks/Bookmarks";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const BookmarksPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <Bookmarks />
    </div>
  );
};

export default BookmarksPage;
