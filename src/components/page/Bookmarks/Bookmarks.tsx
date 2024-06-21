import { useGetBookmarksQuery } from "@/api/bookmark";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Pagination from "@/components/custom/common/Pagination/Pagination";
import Cards from "@/components/page/Bookmarks/Cards";
const Bookmarks = () => {
  const { data, isLoading } = useGetBookmarksQuery("");
  if (isLoading || !data) return <Spinner />;
  return (
    <div className="mt-[5rem] mb-[2rem] flex flex-col items-end gap-[2rem]">
      <Cards data={data} />
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Bookmarks;
