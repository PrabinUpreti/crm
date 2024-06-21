import { useGetWorkspacesQuery } from "@/api/workspace";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Pagination from "@/components/custom/common/Pagination/Pagination";
import Cards from "@/components/page/Workspaces/Cards";
const Workspaces = () => {
  const { data, isLoading } = useGetWorkspacesQuery(``);
  if (isLoading || !data)
    return (
      <div className="h-screen w-full ">
        <Spinner />
      </div>
    );
  return (
    <div className="mt-[5rem] flex flex-col gap-[2rem] items-end mb-[2rem]">
      <Cards data={[null, ...data]} />
      <div className="flex-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Workspaces;
