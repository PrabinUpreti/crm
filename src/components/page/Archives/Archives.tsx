import { useGetArchivesQuery } from "@/api/archives";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Pagination from "@/components/custom/common/Pagination/Pagination";
import Cards from "@/components/page/Archives/Cards";
const Archives = () => {
  const { data, isLoading } = useGetArchivesQuery("");

  if (isLoading || !data) return <Spinner />;
  return (
    <div className="mt-[5rem]  ml-[2rem] flex flex-col gap-[2rem] mb-[2rem]">
      <Cards data={data} />
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Archives;
